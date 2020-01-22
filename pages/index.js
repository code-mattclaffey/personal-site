import React from 'react';
import Head from 'next/head';
import { Region, RegionInner, Heading, Text, Button } from '@titan-tooling/ui';

import '../styles/index.css';

const Home = () => (
    <>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Region
            style={{
                '--region-bg': 'var(--primary)',
                '--region-text-color': 'var(--white)',
            }}
            additionalClassNames="c-banner"
        >
            <RegionInner>
                <Heading type="h3" as="h1" additionalClassNames="c-banner__title">
                    <span className="e-heading--highlighted">Matt Claffey</span>
                </Heading>
                <Text>Hi, I'm Matt & am a Frontend Developer from Manchester</Text>
                <Button as="a" variant="outline">View case studies</Button>
            </RegionInner>
            <div className="c-banner__wave">
              <svg viewBox="0 0 1440 120">
                  <path fill="currentColor" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
              </svg>
            </div>

        </Region>
    </>
);

export default Home;
