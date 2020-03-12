import React from 'react';

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
            <Region
                additionalClassNames="c-personal-projects"
                id="section--feed"
                style={{
                    '--region-text-color': 'var(--dark-bg)',
                    '--region-bg': 'var(--light-bg)',
                }}
            >
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12', md: '9' }}>
                            <Heading
                                type="h4"
                                additionalClassNames="c-personal-projects__main-heading"
                            >
                                My Feed
                            </Heading>
                            <Text additionalClassNames="u-text--larger">
                                From Github projects to blog posts,
                                the latest stuff I have worked on and
                                wrote about will appear here. (worked
                                on content)
                            </Text>
                        </GridItem>
                        <GridItem columns={{ xs: '12', lg: '7' }}>
                            <div className="c-card"
                            >
                                <Heading as="h4" type="h5">
                                    Titan UI
                                </Heading>
                                <Text>
                                    A reusabled CSS Framework which
                                    comes with Typescript React
                                    Components that help spin up
                                    websites faster.
                                </Text>
                                <a
                                    href="/path/to/git/repo"
                                    className="e-link c-card__link"
                                >
                                    Visit{' '}
                                    <span className="u-visually-hidden">
                                        Titan UI on Github
                                    </span>{' '}
                                    Repository
                                </a>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', lg: '7' }}>
                            <div
                                className="c-card"
                            >
                                <Heading as="h4" type="h5">
                                    Demystifying React Context
                                </Heading>
                                <Text>
                                    Yesterday I spent some time
                                    learning about how to use the
                                    context and when I read the docs I
                                    thought, “this sounds extremely
                                    complex for something that does a
                                    simple thing”.
                                </Text>
                                <a
                                    href="/path/to/git/repo"
                                    className="e-link c-card__link"
                                >
                                    Read More{' '}
                                    <span className="u-visually-hidden">
                                        more about Titan UI on Medium
                                    </span>
                                </a>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', lg: '7' }}>
                            <div
                                className="c-card"
                            >
                                <Heading as="h4" type="h5">
                                    Demystifying React Context
                                </Heading>
                                <Text>
                                    Yesterday I spent some time
                                    learning about how to use the
                                    context and when I read the docs I
                                    thought, “this sounds extremely
                                    complex for something that does a
                                    simple thing”.
                                </Text>
                                <a
                                    href="/path/to/git/repo"
                                    className="e-link c-card__link"
                                >
                                    Read More{' '}
                                    <span className="u-visually-hidden">
                                        more about Titan UI on Medium
                                    </span>
                                </a>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', lg: '7' }}>
                            <div
                                className="c-card"
                            >
                                <Heading as="h4" type="h5">
                                    Demystifying React Context
                                </Heading>
                                <Text>
                                    Yesterday I spent some time
                                    learning about how to use the
                                    context and when I read the docs I
                                    thought, “this sounds extremely
                                    complex for something that does a
                                    simple thing”.
                                </Text>
                                <a
                                    href="/path/to/git/repo"
                                    className="e-link c-card__link"
                                >
                                    Read More{' '}
                                    <span className="u-visually-hidden">
                                        more about Titan UI on Medium
                                    </span>
                                </a>
                            </div>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
