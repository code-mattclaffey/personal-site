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
        </Head>
        <Header />
        <Banner />
        <AboutMe />
        <PersonalProjects />
        <Footer />
    </>
);

export default Home;
