import React from 'react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

import '../styles/index.css';
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
            <meta
                property="og:title"
                content="Matt Claffey - Manchester Based - Senior Frontend Developer"
            />
            <meta
                property="og:description"
                content="Hi I'm Matt, I have been a frontend developer for
                around 6 years, I've done work for multiple agencies,
                consulted for clients, and collaborated with talented
                people to create digital products."
            />
            <meta
                property="og:image"
                content="https://mattclaffey.netlify.com/thumbnail.jpg"
            />
            <meta
                property="og:url"
                content="https://mattclaffey.netlify.com"
            />
            <meta
                name="twitter:title"
                content="Matt Claffey - Manchester Based - Senior Frontend Developer"
            />
            <meta
                name="twitter:description"
                content=" Hi I'm Matt, I have been a frontend developer for
                around 6 years, I've done work for multiple agencies,
                consulted for clients, and collaborated with talented
                people to create digital products."
            />
            <meta
                name="twitter:image"
                content="https://mattclaffey.netlify.com/thumbnail.jpg"
            />
            <meta name="twitter:card" content="summary_large_image" />

            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#151a3c"  />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#151a3c"  />
        </Head>
        <Header />
        <Banner />
        <AboutMe />
        <Footer />
    </>
);

export default Home;
