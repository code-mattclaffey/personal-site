import React from 'react';

import Link from 'next/link';

import {
    Region,
    RegionInner,
    Heading,
    Text,
    Grid,
    GridItem,
} from '@titan-tooling/ui';

export const PersonalProjects = () => {
    return (
        <>
            <Region additionalClassNames="c-personal-projects"
            style={{
                '--region-text-color': 'var(--dark-bg)',
                '--region-bg': 'var(--light-bg)',
            }}>
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12', md: '9' }}>
                            <Heading
                                type="h4"
                                additionalClassNames="c-personal-projects__main-heading"
                            >
                                Github is the main place I store all
                                my personal projects. It varies from
                                workshops, documentation, test
                                projects and re-usable tools.
                            </Heading>
                            <Text additionalClassNames="u-text--larger">
                                I love making a new project! That
                                excitement to trying something new out
                                which can then be brought back to to
                                share with colleague really helps my
                                personal development and gives me
                                confidence in implementing new modern
                                features.
                            </Text>
                            <Link href="https://medium.com/@mattclaffey">
                                <a
                                    className="c-button c-button--secondary"
                                    target="_blank"
                                    rel="noopener noreffer"
                                >
                                    View Github Repositories
                                </a>
                            </Link>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    Titan Tooling - ESLint Config
                                </Heading>
                                <Text>
                                    I used to get annoyed when setting
                                    up a project with all the configs
                                    left right and center so I decided
                                    to make my own eslint config so
                                    all my configs were stored via an
                                    npm module.{' '}
                                </Text>
                                <a
                                    href="/path/to/git/repo"
                                    className="e-link"
                                >
                                    Visit{' '}
                                    <span className="u-visually-hidden">
                                        Titan Tooling Eslint Config
                                    </span>{' '}
                                    Repository
                                </a>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    Titan Tooling - UI
                                </Heading>
                                <Text>Some text to come later</Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    Titan Tooling - PostCSS Config
                                </Heading>
                                <Text>Some text to come later</Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    PWA Game Workshop
                                </Heading>
                                <Text>Some text to come later</Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    TDD Workshop
                                </Heading>
                                <Text>Some text to come later</Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                                <Heading as="h4" type="h5">
                                    Performance Kit
                                </Heading>
                                <Text>Some text to come later</Text>
                            </div>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
