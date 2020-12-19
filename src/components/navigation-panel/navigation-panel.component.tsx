import classNames from "classnames";
import { Region, RegionInner } from "../../layouts/region";
import { VSpace } from "../../layouts/vspace";
import * as styles from "./navigation-panel.module.css";

export interface NavigationPanelProps {
  showNavigation?: boolean;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  showNavigation = false,
}) => (
  <Region
    className={classNames(
      styles.navigationPanel,
      !showNavigation && styles.navigationPanelHidden
    )}
  >
    <RegionInner className={styles.navigationPanelInner}>
      <nav>
        <ul>
          <li>
            <h2>Sitemap</h2>
            <VSpace spacing="04" />
            <ul className={styles.navigationPanelColumns}>
              <li>
                <h3>Case studies</h3>
                <VSpace spacing="03" />
                <ul>
                  <li>Cinch - Finance Application Journey</li>
                  <li>Cinch - Apple Pay integration via stripe</li>
                  <li>Cinch - Integrating Stripe</li>
                  <li>Ampersand - SecretSales</li>
                </ul>
              </li>
              <li>
                <h3>Blog posts</h3>
                <VSpace spacing="03" />
                <ul>
                  <li>Link</li>
                </ul>
              </li>
              <li>
                <h3>Latest personal projects</h3>
                <VSpace spacing="03" />
                <ul>
                  <li>Trivia game</li>
                  <li>PWA game</li>
                  <li>Personal site</li>
                </ul>
              </li>
              <li>
                <h3>Socials</h3>
                <VSpace spacing="03" />
                <ul>
                  <li>
                    <a
                      href="https://github.com/code-mattclaffey"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://dribbble.com/mattclaffey/"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Dribble
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/MattClaffey1"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@mattclaffey"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Medium
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/mattc"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Dev.to
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </RegionInner>
  </Region>
);
