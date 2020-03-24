import React from 'react';
import {
    Region,
    RegionInner,
    Heading,
    Text,
    Button,
} from '@titan-tooling/ui';
import {
    BANNER_TITLE,
    BANNER_TEXT,
    BANNER_CTA_TEXT,
    EMAIL_ADDRESS,
} from '../../constants';

export const Banner = () => (
    <Region
        additionalClassNames="c-banner"
        style={{
            '--region-bg': 'var(--dark-bg)',
            '--region-text-color': 'var(--white)',
        }}
    >
        <RegionInner>
            <Heading
                type="h1"
                as="h1"
                additionalClassNames="c-banner__title"
            >
                {BANNER_TITLE}
            </Heading>
            <Text additionalClassNames="c-banner__text u-text--larger@md">
                <BANNER_TEXT />
            </Text>
            <Button
                as="a"
                size="large"
                variant="secondary"
                href={`mailto:${EMAIL_ADDRESS}?Subject=Website%20Enquiry`}
                target="_top"
            >
                {BANNER_CTA_TEXT}
            </Button>
        </RegionInner>
    </Region>
);
