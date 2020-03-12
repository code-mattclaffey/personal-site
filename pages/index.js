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
            <html lang="en" />
            <title>
                Matt Claffey - Manchester Based - Senior Frontend
                Developer
            </title>
            <meta
                name="description"
                content="Hi I'm Matt, I have been a frontend developer for
                around 6 years, I've done work for multiple agencies,
                consulted for clients, and collaborated with talented
                people to create digital products."
            />
            <link rel="icon" href="/favicon.ico" />
            <style jsx global>
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
