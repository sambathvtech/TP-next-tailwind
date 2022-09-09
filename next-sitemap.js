/** @type {import('next-sitemap').IConfig} */

// run: 'next-sitemap';

const siteUrl =
  process.env.NEXT_PUBLIC_API_URL === undefined
    ? 'https://www.test.com'
    : process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-main.xml`,
      `${siteUrl}/sitemap-blog.xml`,
    ],
  },
};
