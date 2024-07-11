/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
    title: 'Fabo Hax',
    description: 'CG Modeler with more than 5 years experience. Brazilian-Peruvian Artist studied architecture, drop out and dedicated to Blockchain and Deep Learning research. Lives in Lima, Perú.',
    keywords: ['architect','developer', 'software', 'peru', 'lima', 'hacker', 'bitcoin', 'trader', 'writer', 'programador', 'desarrollador', 'arquitecto', 'artista', 'nft', 'callao', 'web', 'código', 'html', 'css', 'nextjs', 'javascript', 'python', 'php', 'ruby'],
    author: 'Fabo Hax',
    headerTitle: 'Fabo Hax',
    language: 'en-us',
    theme: 'system',
    siteUrl: 'https://hax.pe',
    siteRepo: 'https://github.com/fabohax/avatar',
    siteLogo: '/logo.png',
    socialBanner: '/opengraph-image.jpg',
    email: '40230@pm.me',
    github: 'https://github.com/fabohax',
    twitter: 'https://twitter.com/fabohax',
    youtube: 'https://youtube.com/@fabohax',
    locale: 'en-US',
    analytics: {
      // If you want to use an analytics provider you have to add it to the
      // content security policy in the `next.config.js` file.
      // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
      umamiAnalytics: {
        // We use an env variable for this site to avoid other users cloning our analytics ID
        umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      },
      // plausibleAnalytics: {
      //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
      // },
      // simpleAnalytics: {},
      // posthogAnalytics: {
      //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
      // },
      // googleAnalytics: {
      //   googleAnalyticsId: '', // e.g. G-XXXXXXX
      // },
    },
  }
  
  module.exports = siteMetadata
  