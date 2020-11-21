import { Banner } from "../components/banner";
import { ButtonLinkVariants } from "../components/button-link";
import { Footer } from "../components/footer";
import { Header } from "../components/header/header.component";
import Layout from "../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Banner
      titleEl="h1"
      title="Frontend Engineer (sometimes UI Designer), based in Manchester."
      copy="Hi! I'm Matt, I specialise in in HTML5, CSS3, JavaScript/React and have experience working with .NET & PHP Platforms. I am currently employed as a Senior Software Engineer for a company called Cinch based in Manchester."
      ctaCopy="See my work"
      ctaUrl="/"
    />
    <Banner
      variant="IronHide"
      title="I am always tinkering with tech"
      copy="My focus at the moment is building reusable design systems, CI and TDD. I also love all things todo with performance & web accessibility."
      ctaCopy="Visit the playground"
      ctaUrl="/"
      buttonVariant={ButtonLinkVariants.bumblebee}
    />
    <Banner
      title="Always taking my skills to the next level"
      copy="I blog on Medium about all the things I learn and I feel that it is so important to share the knowlegde with the world about the things I am passionate about."
      ctaCopy="View resume"
      ctaUrl="/"
    />
    <Banner
      title="I like to share what I learn to help others"
      copy="I blog on Medium about all the things I learn and I feel that it is so important to share the knowlegde with the world about the things I am passionate about."
      ctaCopy="Read blog"
      ctaUrl="/"
      variant="Unitron"
    />
    <Footer />
  </Layout>
);

export default IndexPage;
