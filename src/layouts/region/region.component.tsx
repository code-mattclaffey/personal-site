import React from "react";
import classNames from "classnames";
import { ComponentPatternProps } from "../../types";
import * as styles from "./region.module.css";

interface RegionProps extends ComponentPatternProps {
  verticalSpacing?: "0" | "01" | "02" | "03";
  variant?: "IronHide" | "Unitron";
}

export const Region: React.FC<RegionProps> = ({
  element: HtmlEl = "section",
  className,
  verticalSpacing = "02",
  variant,
  children,
  ...rest
}) => (
  <HtmlEl
    className={classNames(
      styles.region,
      styles[`regionVerticalSpacing${verticalSpacing}`],
      variant && styles[`region${variant}`],
      className
    )}
    {...rest}
  >
    {children}
  </HtmlEl>
);
