import { Menu, X as Close, Sun, Moon } from "react-feather";
import classNames from "classnames";
import * as styles from "./navigation.module.css";

export interface NavigationProps {
  showNavigation: boolean;
  toggleNavigationVisibility: (bool: boolean) => void;
  showDarkMode: boolean;
  toggleDarkMode: (bool: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  showNavigation,
  toggleNavigationVisibility,
  showDarkMode,
  toggleDarkMode,
}) => (
  <div>
    <button
      type="button"
      className={classNames(
        styles.menuButton,
        showNavigation && styles.menuButtonWhenNavIsOpen
      )}
      aria-label="Toggle dark mode"
      onClick={() => toggleDarkMode(!showDarkMode)}
    >
      <Sun
        className={classNames(
          styles.menuButtonIcon,
          !showDarkMode && styles.menuButtonIconHidden
        )}
      />
      <Moon
        className={classNames(
          styles.menuButtonIcon,
          showDarkMode && styles.menuButtonIconHidden
        )}
      />
    </button>
    <button
      type="button"
      className={classNames(
        styles.menuButton,
        showNavigation && styles.menuButtonOpen,
        showNavigation && styles.menuButtonWhenNavIsOpen
      )}
      aria-label="Show Navigation"
      aria-hidden="true"
      onClick={() => toggleNavigationVisibility(!showNavigation)}
    >
      <Menu
        className={classNames(
          styles.menuButtonIcon,
          showNavigation && styles.menuButtonIconHidden
        )}
      />
      <Close
        className={classNames(
          styles.menuButtonIcon,
          !showNavigation && styles.menuButtonIconHidden
        )}
      />
    </button>
  </div>
);
