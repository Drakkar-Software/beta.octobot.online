import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `OctoBot Beta`,
    siteUrl: `https://beta.octobot.online`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'OctoBot Beta',
        short_name: 'OctoBot Beta',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap"]
};

export default config;
