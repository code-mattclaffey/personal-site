import React from 'react';

import {
    Region,
    RegionInner,
    Heading,
    Text,
    Grid,
    GridItem,
    ButtonLink
} from '@titan-tooling/ui';


export const Footer = () => {
    return (
        <>
        <Region
            style={{
                '--region-text-color': 'var(--white)',
                '--region-bg': 'var(--dark-bg)',
            }}
        >
            <RegionInner>
                <Grid additionalClassNames="c-footer__grid">
                    <GridItem columns={{ xs: '12', md: '9' }}>
                        <Heading>‍🚀️ Want to work with me?</Heading>
                        <Text additionalClassNames="u-text--short">I like working on small projects on the side of my day to day so if you need help building a website then get in touch.</Text>
                    </GridItem>
                    <GridItem columns={{ xs: '12', md: '3' }}>
                        <ButtonLink url="mailto:mattclaffey93@gmail.com" variant="secondary">
                            Contact Me
                        </ButtonLink>
                    </GridItem>
                    <GridItem columns={{ xs: '12', md: '9' }}>
                        <Text additionalClassNames="u-text--small">© 2020 mattc. All rights reserved.</Text>
                    </GridItem>
                </Grid>
            </RegionInner>
        </Region>
    </>
    );
};
