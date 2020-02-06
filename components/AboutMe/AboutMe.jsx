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

export const AboutMe = () => {
    return (
        <section>
            <Region as="section" id="section--about" additionalClassNames="c-about-me"
            style={{
                '--region-text-color': 'var(--dark-bg)',
            }}>
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12', md: '9' }}>
                            <div>
                                <Heading type="h4" additionalClassNames="c-about-me__main-heading">
                                    I have been a frontend developer for around 6 years, I've done work for multiple agencies, consulted for clients, and collaborated with talented people to create digital products. 
                                </Heading>
                                <Text additionalClassNames="u-text--larger">
                                    My focus at the moment is
                                    building reusable design systems,{' '}
                                    <abbr title="Continous Integration">
                                        CI
                                    </abbr>{' '}
                                    and{' '}
                                    <abbr title="Test Driven Development">
                                        TDD
                                    </abbr>
                                    . I also love all things todo with
                                    performance & web accessibility.
                                    I'm very outgoing and always up
                                    for working with modern tech, I do
                                    a lot of gym/boxing and I
                                    ocasionally go out to socialise
                                    with friends on the weekend.
                                </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Designer
                            </Heading>
                            <Text>
                                I love designing in the browser
                                whenever I can so I can see my project
                                come to life! I work mainly in Sketch
                                & Photoshop but I have used before;
                                InVision, Marvel App & Zeplin. My
                                Personal design work lives on{' '}
                                <a
                                    href="https://www.dribbble.com/mattclaffey"
                                    target="_blank"
                                    rel="noopener noreffer"
                                >
                                    Dribbble account
                                </a>{' '}
                                feel free to check them out.
                            </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Frontend Developer
                            </Heading>
                            <Text>
                                I love making things as reusable as
                                possible so I spend a lot of time
                                building tools that make my day to day
                                a lot faster.
                            </Text>
                            <Text>
                                The languages I am
                                mainly using at the minute are HTML,
                                CSS, React, PHP, JavaScript. Other
                                languages I am familliar with are .NET
                                & NodeJS.
                            </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Speaker
                            </Heading>
                            <Text>
                                Once a year I talk at an event called
                                MCR Fred on something I am passionate
                                about. It normally sparks from me
                                doing talks or running workshops in
                                the workplace and then branching it
                                out into the frontend community.
                            </Text>
                            <Text>
                                If I
                                feel like it will help someone then I
                                will do it! I also write a lot of
                                blogs on Medium too.
                            </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Tooling
                            </Heading>
                            <Text>
                                I have been focusing my efforts mainly
                                into{' '}
                                <abbr title="Continous Integration">
                                    CI
                                </abbr>{' '}
                                at the minute which is mainly around
                                using tools such as Netlify &
                                TravisCI. I have worked with in the
                                past Jenkins, AWS Code Pipeline &
                                TeamCity.
                            </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Content Management Systems
                            </Heading>
                            <Text>
                                Platforms I am working in are Magento
                                however I have expierence in working
                                in Umbraco, Sitecore, Contentful &
                                Netlify CMS. Trying to work on
                                projects that are more headless now so
                                working on GraphQl, Apollo Client and
                                NextJS
                            </Text>
                            </div>
                        </GridItem>
                        <GridItem columns={{ xs: '12', md: '6' }}>
                            <div className="c-card">
                            <Heading as="h4" type="h5">
                                Events
                            </Heading>
                            <Text>
                                One of my goals in life is to travel
                                and visit a lot of places before I
                                settle down so I decided to invest in
                                travelling to see conferences all over
                                the world. 
                            </Text>
                            <Text>
                                Events I have attended are;
                                2 x Google Hackathons (London), DotCSS
                                & DotJS (Paris), MCR Fred
                                (Manchester), All Day Hey (Leeds) &
                                UpFront North (Manchester). I need to
                                get planning for another one or two
                                this year!
                            </Text>
                            </div>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </section>
    );
};
