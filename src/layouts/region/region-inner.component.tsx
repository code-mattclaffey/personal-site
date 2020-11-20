import React from "react";
import classNames from "classnames";
import { ComponentPatternProps } from "../../types";
import * as styles from "./region.module.css";

interface RegionInnerProps extends ComponentPatternProps {}

export const RegionInner: React.FC<RegionInnerProps> = ({
  element: HtmlEl = "div",
  className,
  children,
  ...rest
}) => (
  <HtmlEl
    data-testid="region-inner"
    className={classNames(styles.regionInner, className)}
    {...rest}
  >
    {children}
  </HtmlEl>
);
