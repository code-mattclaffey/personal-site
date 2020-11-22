import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header.component";
import Layout from "../../layouts/main/main.layout";

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Banner
      titleEl="h1"
      title="Here is some of my work I have done"
      copy="I have 6 years professional experience in front-end development working with multiple agencies & in house companies — helping teams collaborate and work better together, streamline workflow, and deliver quality websites and applications."
    />
    <ul>
      <li>RumRatings - Progressive Web App implementation in Ruby Rails</li>
      <li>Movement Official - Shopify website</li>
      <li>Bentley Clothing - Shopify website</li>
      <li>Cinch Finance Application and Payment Portal / React/Gatsby/AWS</li>
      <li>Shearings - A/B testing & performance consultation</li>
      <li>SecretSales - UI / BAU development / Magento 2</li>
      <li>Poundland - Greenfield UI / BAU development / Magento 2</li>
      <li>Electrical Safety First / BAU development / .net umbraco</li>
      <li>
        Hillarys - Product/BAU development, A/B testing & performance
        consultation / .net umbraco
      </li>
      <li>Bayer Crop Science - Product/ BAU development / .net umbraco</li>
    </ul>
    <Footer />
  </Layout>
);

export default IndexPage;
