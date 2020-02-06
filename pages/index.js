import React from 'react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

import '../styles/index.css';
import { PersonalProjects } from '../components/PersonalProjects';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';

const Home = () => (
    <>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <style jsx>
                {`
                    @font-face {
                        font-display: swap;
                        font-family: 'Gotham';
                        font-style: normal;
                        font-weight: 700;
                        src: url('/GothaProBol.woff2') format('woff2');
                    }

                    @font-face {
                        font-display: swap;
                        font-family: 'Gotham';
                        font-style: normal;
                        font-weight: 300;
                        src: url('/GothaProLig.woff2') format('woff2');
                    }
                `}
            </style>
        </Head>
        <Header />
        <Banner />
        <AboutMe />
        <PersonalProjects />
        <Footer />
    </>
);

export default Home;
