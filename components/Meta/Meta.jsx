import React from 'react';
import uuid from 'react-uuid';
import Head from 'next/head';

export const Meta = ({
    pageTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImg,
    twitterTitle,
    twitterDescription,
    twitterImg,
    manifestLinks,
    themeColor,
    msTileImg,
}) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twitterTitle} />
        <meta
            name="twitter:description"
            content={twitterDescription}
        />
        <meta name="twitter:image" content={twitterImg} />
        <meta name="twitter:card" content="summary_large_image" />

        {manifestLinks.map(link => (
            <link key={uuid()} {...link} />
        ))}

        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-TileImage" content={msTileImg} />
        <meta name="theme-color" content={themeColor} />
    </ Head>
);
