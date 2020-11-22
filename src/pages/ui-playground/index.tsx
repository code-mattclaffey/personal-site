import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header.component";
import { ButtonLinkVariants } from "../../components/button-link";
import Layout from "../../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header variant="IronHide" />
    <Banner
      titleEl="h1"
      variant="IronHide"
      title="I am always tinkering with tech"
      copy="My focus at the moment is building reusable design systems, CI and TDD. I also love all things todo with performance & web accessibility."
      buttonVariant={ButtonLinkVariants.bumblebee}
    />
    <ul>
      <li>PWA Game</li>
      <li>Trivia</li>
      <li>Titan UI</li>
      <li>Performance kit</li>
    </ul>
    <Footer />
  </Layout>
);

export default IndexPage;
