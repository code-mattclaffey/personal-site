import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ManifestLinks = Array<{
  rel: string
  sizes?: string
  type?: string
  href: string
}>

export interface SeoProps {
  title: string
  description: string
  pageImageUrl: string
  themeColor?: string
  msTileImg?: string
  manifestLinks?: ManifestLinks
}

const metaLinks: ManifestLinks = [
  {
    rel: 'icon',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/images/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/images/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '70x70',
    href: '/images/apple-icon-70x70.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/images/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/images/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/images/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/images/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/images/apple-icon-180x180.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '192x192',
    href: '/images/apple-icon-192x192.png',
  },
  {
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png',
    href: '/images/favicon-32x32.png',
  },
  {
    rel: 'icon',
    sizes: '96x96',
    type: 'image/png',
    href: '/images/favicon-96x96.png',
  },
  {
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png',
    href: '/images/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/manifest.json',
  },
]

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pageImageUrl,
  msTileImg = '/images/ms-icon-144x144.png',
  themeColor = '#ffffff',
  manifestLinks = metaLinks,
}) => {
  const { pathname } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://mattclaffey.co.uk/${pageImageUrl}`} />
      <meta property="og:url" content={`https://mattclaffey.co.uk/${pathname}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={pageImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />

      {manifestLinks.map(link => (
        <link
          key={link.href}
          rel={link.rel}
          href={link.href}
          sizes={link.sizes}
          type={link.type}
        />
      ))}
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-TileImage" content={msTileImg} />
      <meta name="theme-color" content={themeColor} />
    </Head>
  )
}
