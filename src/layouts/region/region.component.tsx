import React from "react";
import classNames from "classnames";
import { ComponentPatternProps } from "../../types";
import * as styles from "./region.module.css";

interface RegionProps extends ComponentPatternProps {
  verticalSpacing?: "01" | "02" | "03";
}

export const Region: React.FC<RegionProps> = ({
  element: HtmlEl = "section",
  className,
  verticalSpacing = "02",
  children,
  ...rest
}) => (
  <HtmlEl
    className={classNames(
      styles.region,
      styles[`regionVerticalSpacing${verticalSpacing}`],
      className
    )}
    {...rest}
  >
    {children}
  </HtmlEl>
);
