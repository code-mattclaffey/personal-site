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
} from '@titan-tooling/ui';
import {
    FOOTER_TITLE,
    FOOTER_DESC,
    FOOTER_CTA,
    COPYRIGHT,
    ABOUT_SECTION_TITlE,
    MEDIUM_NAME,
    MEDIUM_URL,
    GITHUB_URL,
    GITHUB_NAME,
    DRIBBBLE_URL,
    DRIBBBLE_NAME,
    EMAIL_ADDRESS,
} from '../../constants';

export const Footer = () => {
    return (
        <>
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
                            <Heading type="h3">
                                ‍{FOOTER_TITLE}
                            </Heading>
                            <Text additionalClassNames="u-text--short">
                                {FOOTER_DESC}
                            </Text>
                        </GridItem>
                        <GridItem
                            columns={{ xs: '12', md: '3' }}
                            additionalClassNames="u-flex@md u-flex--justify-flex-end@md"
                        >
                            <ButtonLink
                                as="a"
                                variant="secondary"
                                href={`mailto:${EMAIL_ADDRESS}?Subject=Website%20Enquiry`}
                                target="_top"
                            >
                                {FOOTER_CTA}
                            </ButtonLink>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <Text additionalClassNames="u-text--small">
                                &copy; {COPYRIGHT}
                            </Text>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <List
                                stacked
                                additionalClassNames="c-footer__links u-flex@md u-flex--justify-flex-end@md"
                            >
                                <ListItem>
                                    <Link href="#section--about">
                                        <a className="c-footer__link e-link u-text--smaller">
                                            {ABOUT_SECTION_TITlE}
                                        </a>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <a
                                        href={MEDIUM_URL}
                                        className="c-footer__link e-link u-text--smaller"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {MEDIUM_NAME}
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <a
                                        href={GITHUB_URL}
                                        className="c-footer__link e-link u-text--smaller"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {GITHUB_NAME}
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <a
                                        href={DRIBBBLE_URL}
                                        className="c-footer__link e-link u-text--smaller"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {DRIBBBLE_NAME}
                                    </a>
                                </ListItem>
                            </List>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
