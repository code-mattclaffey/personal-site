import React from 'react';

import {
    Region,
    RegionInner,
    Heading,
    Text,
    Grid,
    GridItem,
    List,
    ListItem,
} from '@titan-tooling/ui';

export const AboutMe = () => {
    return (
        <>
            <Region
                as="section"
                id="section--about"
                additionalClassNames="c-about-me"
                style={{
                    '--region-text-color': 'var(--dark-bg)',
                }}
            >
                <RegionInner>
                    <Grid>
                        <GridItem columns={{ xs: '12', md: '9' }}>
                            <Heading
                                type="h3"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                About Me
                            </Heading>
                            <Text additionalClassNames="u-text--super">
                                I have
                                6 years professional experience in
                                front-end development working with
                                multiple agencies & in house companies
                                — helping teams collaborate and work
                                better together, streamline workflow,
                                and deliver quality websites and
                                applications.
                            </Text>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                What I'm Working On
                            </Heading>
                            <Text additionalClassNames="u-text--larger">
                                My focus at the moment is building
                                reusable design systems,{' '}
                                <abbr title="Continous Integration">
                                    CI
                                </abbr>{' '}
                                and{' '}
                                <abbr title="Test Driven Development">
                                    TDD
                                </abbr>
                                . I also love all things todo with
                                performance & web accessibility. I'm
                                very outgoing and always up for
                                working with modern tech, I do a lot
                                of gym/boxing and I ocasionally go out
                                to socialise with friends on the
                                weekend.
                            </Text>
                            <Heading
                                type="h5"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                Active Projects
                            </Heading>
                            <List additionalClassNames="u-text--larger">
                                <ListItem>
                                    <a
                                        href="/path/to-repo"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <b>Titan Ui</b>
                                    </a>{' '}
                                    - A reusable CSS Framework which
                                    comes with Typescript React
                                    Components that help spin up
                                    websites faster.{' '}
                                </ListItem>
                                <ListItem>
                                    <a
                                        href="https://performance-kit.netlify.com"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <b>Performance Kit V2</b>
                                    </a>{' '}
                                    - A NextJS project that outputs
                                    static generated blog pages
                                    focused around performance
                                </ListItem>
                                <ListItem>
                                    <a
                                        href="hhttps://www.howtographql.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <b>
                                            How to graphql tutorials
                                        </b>
                                    </a>{' '}
                                    - Learning more about using
                                    graphql and how to use it with a
                                    react project. Hopefully a new
                                    project can spark from it.
                                </ListItem>
                            </List>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                Skills
                            </Heading>
                            <List additionalClassNames="u-text--larger">
                                <ListItem>
                                    <b>HTML</b>: templating languages, style guides, pattern libraries, prototyping
                                </ListItem>
                                <ListItem>
                                    <b>CSS</b>: Sass, Less, PostCSS, BEM & ITCSS
                                </ListItem>
                                <ListItem>
                                    <b>JavaScript</b>: ES6+, React, Redux, NextJS, Gatsby
                                </ListItem>  
                                <ListItem>
                                    <b>Accessibility</b>: testing, audits, education and improvement
                                </ListItem>
                                <ListItem>
                                    <b>Team leadership</b>: code standards and best practices, training, consultation, hiring
                                </ListItem> 
                                <ListItem>
                                    <b>Workflow</b>: Git, automation, testing, continuous integration and delivery, kanban & scrum
                                </ListItem>                                
                            </List>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                Other Information
                            </Heading>
                            <List additionalClassNames="u-text--larger">
                                <ListItem>
                                    <b>Speaker</b>: meetups, internal workshops & internal meetings
                                </ListItem>
                                <ListItem>
                                    <b>Hackathons</b>: Google PWA Hackathon (winner), Google AMP Hackathon (2nd) & internal code in the dark (4th)
                                </ListItem>
                                <ListItem>
                                    <b>Design Tools</b>: Abstract, Sketch, Zepline, Invision, Photoshop & Illustrator
                                </ListItem>  
                                <ListItem>
                                    <b>Platforms</b>: AWS, Sitecore, Umbraco, Magento, Contentful & Netlify
                                </ListItem>
                                <ListItem>
                                    <b>CI Tools</b>: TeamCity, Jenkins, AWS Pipeline, Netlify & Travis CI
                                </ListItem> 
                            </List>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
