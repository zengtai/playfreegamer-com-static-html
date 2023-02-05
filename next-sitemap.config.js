/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.playfreegamer.com",
  // generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/privacy-policy", "/terms-of-use", "/about", "/contact"],
};

// export default config;
