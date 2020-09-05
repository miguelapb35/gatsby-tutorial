/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Gatsby, React, styled-components',
    author: 'miguel',
    data: ['item1', 'item2'],
    person: { name: 'peter', age: 32 },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d0def8ledvhb`,
        accessToken: process.env.ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}
