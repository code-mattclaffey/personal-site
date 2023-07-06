import React from 'react';
import { GetStaticPropsContext } from 'next';
import {
  getAllContentfulPages,
  getContentfulBlogPosts,
  getContentfulPage,
} from '../utils/contentful/contentful';
import { Seo } from '../components/seo/seo.component';
import { Header } from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';

import * as componentMappings from '../utils/contentful/mappings';
import { Banner } from '../components/banner/banner.component';
import { BlogList } from '../components/blog-list/blog-list.component';
import generateRssFeed from '../utils/generateRssFeed';
import { BlogComponent } from '../templates/blog/blog.template';

type TMapper = { [key: string]: any };

const componentMapper: TMapper = {
  bannerComponent: Banner,
  blogListing: BlogList,
  blogPost: BlogComponent,
};

interface IPage {
  title: string;
  description: string;
  components: { [key: string]: object };
}

export default function Page({ title, description, components }: IPage) {
  return (
    <>
      <Seo title={title} description={description} pageImageUrl="images/thumbnail.jpg" />
      <Header />
      <main>
        {Object.keys(components).map((component) => {
          const Component = componentMapper[component];

          return <Component {...components[component]} />;
        })}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const pages = await getAllContentfulPages();

  const paths = pages.items.map((page: any) => ({
    params: { slug: page.fields.pageSlug.split('/') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const blogPosts = await getContentfulBlogPosts();
  await generateRssFeed(blogPosts);

  let path;

  if (params?.slug === undefined) {
    path = '/';
  } else {
    path = (params.slug as string[]).join('/');
  }

  const pageData = await getContentfulPage(path);

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  let components = {};

  const availableComponents = pageData.fields.components.filter((component: any) => {
    console.log(component.sys.contentType.sys.id);
    return (componentMappings as any)[component.sys.contentType.sys.id] !== undefined;
  });

  await Promise.all(
    availableComponents.map((component: any) => {
      return (componentMappings as any)[component.sys.contentType.sys.id](component);
    }),
  ).then((formattedData: any) => {
    formattedData.forEach((dataItem: any) => {
      // @ts-ignore
      components[dataItem.id] = dataItem.props;
    });
  });

  return {
    props: {
      title: pageData.fields.pageTitle,
      description: pageData.fields.pageDescription,
      components,
    },
  };
}
