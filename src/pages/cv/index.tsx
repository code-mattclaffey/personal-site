import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header.component";
import Layout from "../../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Banner
      titleEl="h1"
      title="Always taking my skills to the next level"
      copy="I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about."
    />
    <Footer />
  </Layout>
);

export default IndexPage;
