/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mehedims.com',
  generateRobotsTxt: true,
  exclude: ['/test-og'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mehedims.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test-og'],
      },
    ],
  },
  outDir: 'public',
} 