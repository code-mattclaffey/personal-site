import React from 'react';
import Link from 'next/link';

import {
    Region,
    RegionInner,
    Heading,
    Text,
    Grid,
    GridItem,
    ButtonLink,
    List,
    ListItem,
    Image
} from '@titan-tooling/ui';


export const Footer = () => {
    return (
        <>
        <Region>
            <RegionInner>
                <Grid additionalClassNames="u-flex--align-items u-text--center">
                    <GridItem columns={{ xs: '12' }}>
                        <Heading>I have had the pleasure working with</Heading>
                    </GridItem>
                    <GridItem columns={{ xs: '12', sm: '6', md: '3' }}>
                        <Image additionalClassNames="c-about-me__image" src="/code-logo.jpg" alt="Code Computerlove" />
                    </GridItem>
                    <GridItem columns={{ xs: '12', sm: '6', md: '3' }}>
                        <Image additionalClassNames="c-about-me__image" src="/booking-go.jpg" alt="BookingGo" />
                    </GridItem>
                    <GridItem columns={{ xs: '12', sm: '6', md: '3' }}>
                        <Image additionalClassNames="c-about-me__image" src="/ampersand-logo.jpg" alt="Ampersand" style={{ width: '100px' }}/>
                    </GridItem>
                    <GridItem columns={{ xs: '12', sm: '6', md: '3' }}>
                        <Image additionalClassNames="c-about-me__image" src="/dept-logo.jpg" alt="Dept" />
                    </GridItem>
                </Grid>
            </RegionInner>
        </Region>
        <Region
            additionalClassNames="c-footer"
            style={{
                '--region-text-color': 'var(--white)',
                '--region-bg': 'var(--dark-bg)',
            }}
        >
            <RegionInner>
                <Grid additionalClassNames="c-footer__grid">
                    <GridItem columns={{ xs: '12', md: '9' }}>
                        <Heading type="h3">‍🚀️ Want to work with me?</Heading>
                        <Text additionalClassNames="u-text--short">I like working on small projects on the side of my day to day so if you need help building a website then get in touch.</Text>
                    </GridItem>
                    <GridItem columns={{ xs: '12', md: '3' }} additionalClassNames="u-flex@md u-flex--justify-flex-end@md">
                        <ButtonLink url="mailto:mattclaffey93@gmail.com" variant="secondary">
                            Contact Me
                        </ButtonLink>
                    </GridItem>
                    <GridItem columns={{ xs: '12', md: '6' }}>
                        <Text additionalClassNames="u-text--small">© 2020 mattc. All rights reserved.</Text>
                    </GridItem>
                    <GridItem columns={{ xs: '12', md: '6' }}>
                        <List inline additionalClassNames="u-flex@md u-flex--justify-flex-end@md">
                            <ListItem>
                                <Link href="#section--about">
                                    <a className="c-footer__link e-link u-text--smaller">About Me</a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#section--feed">
                                    <a className="c-footer__link e-link u-text--smaller">My Feed</a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://medium.com/@mattclaffey">
                                    <a className="c-footer__link e-link u-text--smaller" target="_blank" rel="noreferrer">Medium</a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/code-mattclaffey">
                                    <a className="c-footer__link e-link u-text--smaller" target="_blank" rel="noreferrer">Github</a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="http://dribbble.com/mattclaffey/">
                                    <a className="c-footer__link e-link u-text--smaller" target="_blank" rel="noreferrer">Dribbble</a>
                                </Link>
                            </ListItem>
                        </List>
                    </GridItem>
                </Grid>
            </RegionInner>
        </Region>
    </>
    );
};
