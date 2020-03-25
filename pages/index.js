import React from 'react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

import '../styles/index.css';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';
import { Meta } from '../components/Meta';

import {
    PAGE_TITLE,
    META_DESCRIPTION,
    SOCIAL_CARD_DESC,
    SOCIAL_CARD_IMG,
    OG_URL,
    MANIFEST_LINKS,
    THEME_COLOR,
    MS_TILE_IMAGE,
} from '../constants';
import { Companies } from '../components/Companies';

const Home = () => (
    <>
        <Meta
            pageTitle={PAGE_TITLE}
            metaDescription={META_DESCRIPTION}
            ogTitle={PAGE_TITLE}
            ogDescription={SOCIAL_CARD_DESC}
            ogImg={SOCIAL_CARD_IMG}
            ogUrl={OG_URL}
            twitterTitle={PAGE_TITLE}
            twitterDescription={SOCIAL_CARD_DESC}
            twitterImg={SOCIAL_CARD_IMG}
            manifestLinks={MANIFEST_LINKS}
            msTileImg={MS_TILE_IMAGE}
            themeColor={THEME_COLOR}
        />
        <Header />
        <Banner />
        <AboutMe />
        <Companies />
        <Footer />
    </>
);

export default Home;
