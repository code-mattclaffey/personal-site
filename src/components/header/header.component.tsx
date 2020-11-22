import { RegionInner, Region } from "../../layouts/region";
import { Logo } from "../logo/logo.component";
import * as styles from "./header.module.css";

export interface HeaderProps {
  variant?: "IronHide" | "Unitron";
}

export const Header: React.FC<HeaderProps> = ({ variant }) => (
  <Region
    verticalSpacing="0"
    element="header"
    className={styles.header}
    variant={variant}
  >
    <RegionInner element="nav">
      <Logo />
    </RegionInner>
  </Region>
);
