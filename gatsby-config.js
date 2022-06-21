const tailwindcss = require('tailwindcss');
// const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss(`${__dirname}/tailwind.config.js`), autoprefixer]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`]
      }
    }
  ]
};

