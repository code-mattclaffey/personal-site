import React from 'react';
import uuid from 'react-uuid';

import {
    COMPANIES,
    COMPANY_TITLE,
} from '../../constants';

import {
    Region,
    RegionInner,
    Heading,
    Grid,
    GridItem,
    Image,
} from '@titan-tooling/ui';

export const Companies = () => (
    <Region>
        <RegionInner>
            <Grid additionalClassNames="u-flex--align-items u-text--center">
                <GridItem columns={{ xs: '12' }}>
                    <Heading>{COMPANY_TITLE}</Heading>
                </GridItem>
                {COMPANIES.map(companyImg => (
                    <GridItem columns={{ xs: '6', sm: '4' }} key={uuid()}>
                        <Image
                            additionalClassNames="c-about-me__image"
                            {...companyImg}
                        />
                    </GridItem>
                ))}
            </Grid>
        </RegionInner>
    </Region>
);
