import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header.component";
import Layout from "../../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header variant="Unitron" />
    <Banner
      titleEl="h1"
      title="I like to share what I learn to help others"
      copy="I blog on Medium about all the things I learn and I feel that it is so important to share the knowlegde with the world about the things I am passionate about."
      variant="Unitron"
    />
    <ul>
      <li>Blog posts from medium/dev.to</li>
    </ul>
    <Footer />
  </Layout>
);

export default IndexPage;
