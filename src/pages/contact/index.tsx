import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header.component";
import Layout from "../../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Banner
      titleEl="h1"
      title="Let's chat!"
      copy="I like to look for small projects to work on the side to help my personal development as well as making some extra income. Feel free to send me a message if you need help with a project."
    />
    <Footer />
  </Layout>
);

export default IndexPage;
