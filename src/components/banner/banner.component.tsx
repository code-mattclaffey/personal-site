import React from "react";
import { ButtonLink, ButtonLinkVariants } from "../button-link";
import { Region, RegionInner } from "../../layouts/region";
import { VSpace } from "../../layouts/vspace";

export interface BannerProps {
  titleEl?: "h1" | "h2";
  title: string;
  copy: string;
  ctaCopy?: string;
  ctaUrl?: string;
  variant?: "IronHide" | "Unitron";
  buttonVariant?: keyof typeof ButtonLinkVariants;
}

export const Banner: React.FC<BannerProps> = ({
  titleEl: TitleElement = "h2",
  title,
  copy,
  ctaCopy,
  ctaUrl,
  variant,
  buttonVariant,
}) => {
  return (
    <Region verticalSpacing="03" variant={variant}>
      <RegionInner>
        <TitleElement>{title}</TitleElement>
        <VSpace spacing="02" />
        <p>{copy}</p>
        {ctaCopy && ctaUrl && (
          <>
            <VSpace spacing="04" />

            <ButtonLink variant={buttonVariant} url={ctaUrl}>
              {ctaCopy}
            </ButtonLink>
          </>
        )}
      </RegionInner>
    </Region>
  );
};
