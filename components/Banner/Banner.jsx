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
    >
        <RegionInner>
            <Heading
                type="h2"
                as="h1"
                additionalClassNames="c-banner__title"
            >
                🙋‍♂️ Heyy! I'm Matt.
            </Heading>
            <Text additionalClassNames="c-banner__text u-text--larger">
                Designer, Frontend Developer & Speaker living in Manchester.
            </Text>
            <Button as="a" variant="primary" size="large">
                View case studies
            </Button>
        </RegionInner>
        <div className="c-banner__wave">
            <svg viewBox="0 0 1440 120">
                <path
                    d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
                ></path>
            </svg>
        </div>
    </Region>
);
