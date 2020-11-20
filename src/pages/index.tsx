import Layout from "../layouts/main/main.layout";
import { RegionInner } from "../layouts/region/region-inner.component";
import { Region } from "../layouts/region/region.component";

const IndexPage = () => (
  <Layout title="Home">
    <Region>
      <RegionInner>
        <h1>Hello!</h1>
      </RegionInner>
    </Region>
  </Layout>
);

export default IndexPage;
