const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withOffline = require('next-offline')


module.exports = withOffline(withBundleAnalyzer(withCSS()));