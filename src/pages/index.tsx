import { ButtonLink, ButtonLinkVariants } from "../components/button-link";
import Layout from "../layouts/main/main.layout";
import { RegionInner } from "../layouts/region/region-inner.component";
import { Region } from "../layouts/region/region.component";
import { VSpace } from "../layouts/vspace";

const IndexPage = () => (
  <Layout title="Home">
    <Region verticalSpacing="01">
      <RegionInner>
        <h4>mattc.</h4>
      </RegionInner>
    </Region>
    <Region verticalSpacing="03">
      <RegionInner>
        <h1>Frontend Engineer (sometimes UI Designer), based in Manchester.</h1>
        <VSpace spacing="02" />
        <p>
          Hey! I like all things around Designs Systems / Web Performance PWA’s.
          If thats your thing let’s chat.
        </p>
        <VSpace spacing="04" />
        <ButtonLink url="/">Visit the playground</ButtonLink>
      </RegionInner>
    </Region>
    <Region
      verticalSpacing="03"
      style={{
        "--region-background": "var(--color-ironhide);",
        "--region-color": "var(--color-starscream);",
      }}
    >
      <RegionInner>
        <h2>I am always tinkering with tech</h2>
        <VSpace spacing="02" />
        <p>
          Hey! I like all things around Designs Systems / Web Performance PWA’s.
          If thats your thing let’s chat.
        </p>
        <VSpace spacing="04" />
        <ButtonLink url="/" variant={ButtonLinkVariants.bumblebee}>
          Visit the playground
        </ButtonLink>
      </RegionInner>
    </Region>
    <Region verticalSpacing="03">
      <RegionInner>
        <h1>Always taking my skills to the next level</h1>
        <VSpace spacing="04" />
        <ButtonLink url="/">View resume</ButtonLink>
      </RegionInner>
    </Region>
    <Region
      verticalSpacing="03"
      style={{
        "--region-background": "var(--color-unitron);",
      }}
    >
      <RegionInner>
        <h2>I like to share what I learn to help others</h2>
        <VSpace spacing="02" />
        <p>
          Hey! I like all things around Designs Systems / Web Performance PWA’s.
          If thats your thing let’s chat.
        </p>
        <VSpace spacing="04" />
        <ButtonLink url="/">Read blog</ButtonLink>
      </RegionInner>
    </Region>
    <Region
      verticalSpacing="03"
      style={{
        "--region-background": "var(--color-ironhide);",
        "--region-color": "var(--color-starscream);",
      }}
    >
      <RegionInner>
        <h2>Want to work with me?</h2>
        <VSpace spacing="02" />
        <p>
          Hey! I like all things around Designs Systems / Web Performance PWA’s.
          If thats your thing let’s chat.
        </p>
        <VSpace spacing="04" />
        <ButtonLink url="/" variant={ButtonLinkVariants.bumblebee}>
          Visit the playground
        </ButtonLink>
      </RegionInner>
    </Region>
  </Layout>
);

export default IndexPage;
