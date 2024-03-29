module.exports = {
  siteMetadata: {
    title: `gatsy blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
            `gatsby-plugin-image`,
            `gatsby-plugin-sharp`,

            {
              resolve:'gatsby-source-filesystem',
              options:{
                name:'blog',
                path:`${__dirname}/blog`,
                 ignore: [`**/\.*`]
              }

            },
            `gatsby-plugin-mdx`,
            

            ]
}
