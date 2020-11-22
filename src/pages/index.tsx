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
      title="👨🏻‍💻 Frontend Engineer (sometimes UI Designer), based in Manchester."
      copy="Hi! I'm Matt, I specialise in in HTML5, CSS3, JavaScript/React and have experience working with .NET & PHP Platforms. I am currently employed as a Senior Software Engineer for a company called Cinch based in Manchester."
      ctaCopy="See my work"
      ctaUrl="/case-studies"
    />
    <Banner
      variant="IronHide"
      title="‍🧪 I am always tinkering with tech"
      copy="My focus at the moment is building reusable design systems, CI and TDD. I also love all things todo with performance & web accessibility."
      ctaCopy="Visit the playground"
      ctaUrl="/ui-playground"
      buttonVariant={ButtonLinkVariants.bumblebee}
    />
    <Banner
      title="‍‍🚀️ Always taking my skills to the next level"
      copy="I have 6 years professional experience in front-end development working with multiple agencies & in house companies — helping teams collaborate and work better together, streamline workflow, and deliver quality websites and applications."
      ctaCopy="View cv"
      ctaUrl="/cv"
    />
    <Banner
      title="✍🏻 I like to share what I learn to help others"
      copy="I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about."
      ctaCopy="Read blog"
      ctaUrl="/blog"
      variant="Unitron"
    />
    <Footer />
  </Layout>
);

export default IndexPage;
