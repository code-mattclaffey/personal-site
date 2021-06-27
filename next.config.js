const withOffline = require('next-offline')
const withImages = require('next-images')

const nextConfig = {
  workboxOpts: {
    urlPattern: /^https?.*/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'offlineCache',
      expiration: {
        maxEntries: 200
      },
      cacheableResponse: {
        statuses: [0, 200],
      }
    }
  }
}

module.exports = withImages()
