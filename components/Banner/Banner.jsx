import React from 'react';
import {
    Region,
    RegionInner,
    Heading,
    Text,
    Button,
} from '@titan-tooling/ui';

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
                Designer, Frontend Developer & Speaker living in{' '}
                Manchester.
            </Heading>
            <Text additionalClassNames="c-banner__text u-text--larger@md">
                Hi I'm Matt, I have been a frontend developer for
                around 6 years, I've done work for multiple agencies,
                consulted for clients, and collaborated with talented
                people to create digital products.
            </Text>
            <Button as="a" size="large" variant="secondary" href="mailto:mattclaffey93@gmail.com?Subject=Website%20Enquiry" target="_top">
                Contact Me
            </Button>
        </RegionInner>
    </Region>
);
