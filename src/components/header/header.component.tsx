import { useState } from "react";
import classNames from "classnames";
import { RegionInner, Region } from "../../layouts/region";
import { Logo } from "../logo/logo.component";
import { Navigation } from "../navigation";
import * as styles from "./header.module.css";
import { NavigationPanel } from "../navigation-panel";

export interface HeaderProps {
  variant?: "IronHide" | "Unitron";
}

export const Header: React.FC<HeaderProps> = ({ variant }) => {
  const [showNavigation, toggleNavigationVisibility] = useState<boolean>(false);
  const [showDarkMode, toggleDarkMode] = useState<boolean>(false);

  return (
    <>
      <Region
        verticalSpacing="0"
        element="header"
        className={classNames(
          styles.header,
          showNavigation && styles.headerNavOpen
        )}
        variant={variant}
      >
        <RegionInner element="nav" className={styles.headerInner}>
          <Logo />
          <Navigation
            showNavigation={showNavigation}
            toggleNavigationVisibility={toggleNavigationVisibility}
            showDarkMode={showDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </RegionInner>
      </Region>
      <NavigationPanel showNavigation={showNavigation} />
    </>
  );
};
