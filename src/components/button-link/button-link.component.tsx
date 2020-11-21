import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { ComponentPatternProps } from "../../types";
import * as styles from "./button-link.module.css";

export enum ButtonLinkVariants {
  optimus = "optimus",
  bumblebee = "bumblebee",
  bumblebeeAlt = "bumblebeeAlt",
}

export enum ButtonLinkClassNames {
  optimus = "buttonLinkOptimus",
  bumblebee = "buttonLinkBumblebee",
  bumblebeeAlt = "buttonLinkBumblebeeAlt",
}

interface ButtonLinkProps extends ComponentPatternProps {
  url: string;
  variant?: keyof typeof ButtonLinkVariants;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  element: HtmlEl = "a",
  url,
  variant = ButtonLinkVariants["optimus"],
  className,
  children,
  ...rest
}) => (
  <Link href={url}>
    <HtmlEl
      className={classNames(
        styles.buttonLink,
        styles[ButtonLinkClassNames[ButtonLinkVariants[variant]]],
        className
      )}
      {...rest}
    >
      {children}
    </HtmlEl>
  </Link>
);
