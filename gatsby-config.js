/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "gatsby-app",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://370f830d1131.ngrok.io`,
        contentTypes: [`persons`],
      },
    },
    "@chakra-ui/gatsby-plugin",
  ],
}
