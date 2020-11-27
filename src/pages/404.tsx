import { Banner } from "../components/banner";
import { Header } from "../components/header/header.component";
import Layout from "../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Banner
      titleEl="h1"
      title="Oops! Looks like you are lost"
      copy="Let's get you back to the homepage."
      ctaCopy="Return home"
      ctaUrl="/"
    />
  </Layout>
);

export default IndexPage;
