import React from "react";
import { ComponentPatternProps } from "../../types";

export interface VSpaceProps extends ComponentPatternProps {
  spacing?: "01" | "02" | "03" | "04";
}

export const VSpace: React.FC<VSpaceProps> = ({
  element: HtmlEl = "div",
  className,
  spacing = "02",
}) => (
  <HtmlEl
    className={className}
    style={{ marginBottom: `var(--spacing-${spacing})` }}
  />
);
