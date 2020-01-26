import React from 'react';

import Link from 'next/link';

import {
    Region,
    RegionInner,
    Heading,
    Text,
    Grid,
    GridItem,
    Picture,
    Image,
} from '@titan-tooling/ui';

export const BlogGrid = () => {
    return (
        <>
            <Region>
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12' }}>
                            <div className="c-blog-grid__header">
                                <Heading>
                                    Here is what I am into at the
                                    minute.
                                </Heading>
                                <Text additionalClassNames="u-text--larger">
                                    I write a blog post every couple
                                    of weeks about small things that I
                                    really enjoy about the web.
                                </Text>
                                <Link href="/">
                                    <a
                                        className="c-button c-button--outline"
                                        target="_blank"
                                        rel="noopener noreffer"
                                    >
                                        Read All Blog Posts
                                    </a>
                                </Link>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '4' }}>
                            <article className="c-blog-card">
                                <Picture
                                    width="400"
                                    height="400"
                                ></Picture>
                                <Heading
                                    type="h3"
                                    as="h3"
                                    additionalClassNames="u-margin--top"
                                >
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
                                <Link href="/">
                                    <a
                                        className="c-button c-button--outline"
                                        target="_blank"
                                        rel="noopener noreffer"
                                    >
                                        Read More{' '}
                                        <span className="u-visually-hidden">
                                            about here is what I am
                                            into at the minute article
                                            on Medium.
                                        </span>
                                    </a>
                                </Link>
                            </article>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '4' }}>
                            <article className="c-blog-card">
                                <Picture
                                    width="400"
                                    height="400"
                                ></Picture>
                                <Heading
                                    type="h3"
                                    as="h3"
                                    additionalClassNames="u-margin--top"
                                >
                                    My favourite talks at DotCSS Paris
                                </Heading>
                                <Text>
                                    Day one was focused around CSS and
                                    each talk was truly inspiring.
                                    Here are a couple of talks that
                                    really stood out for me.
                                </Text>
                                <Link href="/">
                                    <a
                                        className="c-button c-button--outline"
                                        target="_blank"
                                        rel="noopener noreffer"
                                    >
                                        Read more{' '}
                                        <span className="u-visually-hidden">
                                            here is what I am into at
                                            the minute article on
                                            Medium.
                                        </span>
                                    </a>
                                </Link>
                            </article>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '4' }}>
                            <article className="c-blog-card">
                                <Picture
                                    width="400"
                                    height="400"
                                ></Picture>
                                <Heading
                                    type="h3"
                                    as="h3"
                                    additionalClassNames="u-margin--top"
                                >
                                    The PWA game
                                </Heading>
                                <Text>
                                    Offline is becoming a standard
                                    thing to do in web applications
                                    because they allow your website to
                                    feel like an app. In the modern
                                    web most things are doable in an
                                    app can now be done on the web.
                                </Text>
                                <Link href="/">
                                    <a
                                        className="c-button c-button--outline"
                                        target="_blank"
                                        rel="noopener noreffer"
                                    >
                                        Read more{' '}
                                        <span className="u-visually-hidden">
                                            here is what I am into at
                                            the minute article on
                                            Medium.
                                        </span>
                                    </a>
                                </Link>
                            </article>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
