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
            <Region
                additionalClassNames="c-blog-grid"
                style={{
                    '--region-text-color': 'var(--white)',
                }}>
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12', md: '9' }}>
                            <div className="c-blog-grid__header">
                                <Heading type="h4" additionalClassNames="c-blog-grid__main-heading">
                                    I write a blog post every couple
                                    of weeks about small things that I
                                    really enjoy about the web.
                                </Heading>
                                <Text additionalClassNames="u-text--larger">
                                    Blog posts vary from Web Performance, Accessibility, React and anything cool of course!
                                </Text>
                                <Link href="https://medium.com/@mattclaffey">
                                    <a
                                        className="c-button c-button--secondary"
                                        target="_blank"
                                        rel="noopener noreffer"
                                    >
                                        Read All Blog Posts
                                    </a>
                                </Link>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12' }}>
                            <article className="c-blog-card">
                                <div className="c-blog-card__image-content">
                                    <Picture
                                        width="300"
                                        height="300"
                                        additionalClassNames="c-blog-card__image-placeholder"
                                    >
                                        <Image src="https://miro.medium.com/max/2400/0*E0CdUNcaS_SsYPaa.png" alt="Demystifying React Context" />
                                    </Picture>
                                </div>
                                <div className="c-blog-card__content">
                                    <Heading
                                        type="h3"
                                        as="h3"
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
                                    <Link href="https://itnext.io/demystifying-react-context-beba679e3de1">
                                        <a
                                            className="e-link c-blog-card__link"
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
                                </div>
                            </article>
                        </GridItem>
                        <GridItem columns={{ xs: '12' }}>
                            <article className="c-blog-card">
                                <div className="c-blog-card__image-content">
                                    <Picture
                                        width="300"
                                        height="300"
                                        additionalClassNames="c-blog-card__image-placeholder"
                                    >
                                        <Image src="https://miro.medium.com/max/2880/1*UI_r_it2zh9yMkLBKu7EGw.jpeg" alt=" My favourite talks at DotCSS Paris" />
                                    </Picture>
                                </div>
                                <div className="c-blog-card__content">
                                    <Heading
                                        type="h3"
                                        as="h3"
                                    >
                                        My favourite talks at DotCSS Paris
                                    </Heading>
                                    <Text>
                                        Day one was focused around CSS and
                                        each talk was truly inspiring.
                                        Here are a couple of talks that
                                        really stood out for me.
                                    </Text>
                                    <Link href="https://medium.com/@mattclaffey/my-favourite-talks-at-dotcss-paris-2c9b04788d10">
                                        <a
                                            className="e-link c-blog-card__link"
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
                                </div>
                            </article>
                        </GridItem>
                        <GridItem columns={{ xs: '12' }}>
                            <article className="c-blog-card">
                                <div className="c-blog-card__image-content">
                                    <Picture
                                        additionalClassNames="c-blog-card__image-placeholder"
                                        width="300"
                                        height="300"
                                    >
                                        <Image src="https://miro.medium.com/max/3284/1*0nSLsocpWbYsxQDPB7lP0Q.png" alt="The PWA game"/>
                                    </Picture>
                                </div>
                                <div className="c-blog-card__content">
                                    <Heading
                                        type="h3"
                                        as="h3"
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
                                    <Link href="https://medium.com/swlh/the-pwa-game-856477e09728">
                                        <a
                                            className="e-link c-blog-card__link"
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
                                </div>
                            </article>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
