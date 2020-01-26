import React from 'react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

import '../styles/index.css';
import { BlogGrid } from '../components/BlogGrid';

const Home = () => (
    <>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Banner />
        <BlogGrid />
    </>
);

export default Home;
