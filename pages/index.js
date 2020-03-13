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
        </Head>
        <Header />
        <Banner />
        <AboutMe />
        <Footer />
    </>
);

export default Home;
