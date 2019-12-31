const config = {
  siteTitle: `AOJ coordinator`,
  siteTitleAlt: `AOJ coordinator - simple AOJ arena conrdinator -`,
  siteHeadline: `AOJ coordinator - simple AOJ arena conrdinator -`,
  siteUrl: `https://aoj-coordinator.web.app`,
  siteDescription: `AOJ coordinator - simple AOJ arena coordinator -\nYou can easily create virtual contest and manage your solved problems`,
  siteLanguage: `ja`,
  author: `@osaremochi`, // twitter account id
  basePath: `/`
};

//pallet; https://coolors.co/fcb3b3-151e3f-030027-f2f3d9-c16e70
module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: `UA-149661454-1`
      }
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: `hpp`,
        description: config.siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `./src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
