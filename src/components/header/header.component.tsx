import { RegionInner, Region } from "../../layouts/region";
import { Logo } from "../logo/logo.component";
import * as styles from "./header.module.css";

export const Header = () => (
  <Region verticalSpacing="0" element="header" className={styles.header}>
    <RegionInner element="nav">
      <Logo />
    </RegionInner>
  </Region>
);
