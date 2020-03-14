import React from 'react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

import '../styles/index.css';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';

const Home = () => (
    <>
        <Header />
        <Banner />
        <AboutMe />
        <Footer />
    </>
);

export default Home;
