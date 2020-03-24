import React from 'react';
import uuid from 'react-uuid';

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
import {
    ABOUT_SECTION_TITlE,
    ABOUT_SECTION_DESC,
    WHAT_I_WORK_ON_TITlE,
    WHAT_I_WORK_ON_TEXT,
    ACTIVE_PROJECTS,
    ACTIVE_PROJECTS_TITLE,
    SKILLS_TITLE,
    SKILLS,
    OTHER_TITLE,
    OTHER,
} from '../../constants';

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
                                {ABOUT_SECTION_TITlE}
                            </Heading>
                            <Text additionalClassNames="u-text--larger u-text--super@md">
                                {ABOUT_SECTION_DESC}
                            </Text>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                {WHAT_I_WORK_ON_TITlE}
                            </Heading>
                            <Text additionalClassNames="u-text--larger@md">
                                <WHAT_I_WORK_ON_TEXT />
                            </Text>
                            <Heading
                                type="h5"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                {ACTIVE_PROJECTS_TITLE}
                            </Heading>
                            <List additionalClassNames="u-text--larger@md">
                                {ACTIVE_PROJECTS.map(
                                    ActiveProject => (
                                        <ListItem key={uuid()}>
                                            <ActiveProject />
                                        </ListItem>
                                    ),
                                )}
                            </List>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                {SKILLS_TITLE}
                            </Heading>
                            <List additionalClassNames="u-text--larger@md">
                                {SKILLS.map(Skill => (
                                    <ListItem key={uuid()}>
                                        <Skill />
                                    </ListItem>
                                ))}
                            </List>
                            <hr className="e-divider" />
                            <Heading
                                type="h4"
                                additionalClassNames="c-about-me__main-heading"
                            >
                                {OTHER_TITLE}
                            </Heading>
                            <List additionalClassNames="u-text--larger@md">
                                {OTHER.map(OtherInfo => (
                                    <ListItem key={uuid()}>
                                        <OtherInfo />
                                    </ListItem>
                                ))}
                            </List>
                        </GridItem>
                    </Grid>
                </RegionInner>
            </Region>
        </>
    );
};
