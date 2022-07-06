/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://reurl.cc/9GXmjj',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/sitemap-new.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://www.wgfun.club/sitemap-new.xml'],
  },
};
