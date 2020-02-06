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
        additionalClassNames="c-banner o-region--has-shape-bottom"
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
                Designer, Frontend Developer & Speaker living in {' '}
                <span className="c-banner__highlighted-text">Manchester.</span>
            </Heading>
            <Text additionalClassNames="c-banner__text u-text--larger@md">
                Hi I'm Matt, I have been a frontend developer for around 6 years,
                I've done work for multiple agencies, consulted for
                clients, and collaborated with talented people to
                create digital products.
            </Text>
            <Button as="a" variant="secondary" size="large">
                View case studies
            </Button>
        </RegionInner>
        <div className="o-region__shape o-region__shape--bottom">
            <svg
                viewBox="0 0 1440 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M827.243 202.965L1440 82V440H0V0L816.814 202.713C820.229 203.561 823.79 203.647 827.243 202.965Z" fill="var(--white)"></path>
            </svg>
        </div>
    </Region>
);
