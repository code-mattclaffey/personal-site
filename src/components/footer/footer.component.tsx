import { RegionInner, Region } from "../../layouts/region";
import { VSpace } from "../../layouts/vspace";
import { ButtonLink, ButtonLinkVariants } from "../button-link";
import { Logo } from "../logo";
import * as styles from "./footer.module.css";

export const Footer = () => (
  <Region
    verticalSpacing="01"
    variant="IronHide"
    element="footer"
    className={styles.footer}
  >
    <RegionInner>
      <h2 className="h3">Want to work with me?</h2>
      <VSpace spacing="02" />
      <p>
        I like working on small projects on the side of my day to day so if you
        need help building a website then get in touch.
      </p>
      <VSpace spacing="04" />
      <ButtonLink url="/contact" variant={ButtonLinkVariants.bumblebee}>
        Get in touch
      </ButtonLink>
      <VSpace spacing="04" />
      <Logo />
      <VSpace spacing="02" />
      <p>© 2020 mattc. All rights reserved.</p>
    </RegionInner>
  </Region>
);
