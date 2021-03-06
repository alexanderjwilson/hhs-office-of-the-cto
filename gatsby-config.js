module.exports = {
  siteMetadata: {
    author: 'Foo',
    title: `Office of the Chief Technology Officer`,
    description: `Welcome to the Office of the Chief Technology Officer. We test and validate solutions to solve challenging problems in the delivery of health and human services. Located in the Immediate Office of the Secretary, the Office of the CTO is also tasked with promoting innovation across the entire department.`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        items: [{ text: 'About', link: '/document-with-sidenav' }],
      },
      {
        items: [{ text: 'Blog', link: '/blog' }],
      },
      //{
      //  items: [
      //   { text: 'Initiatives', link: '/document-with-sidenav' },
      //  ],
      //},
      {
        title: 'Innovation and Partnerships',
        items: [
          { text: 'KidneyX', link: '/' },
          { text: 'Lyme Innovation', link: '/' },
          { text: 'PreventionX', link: '/' },
          { text: 'Ignite Accelerator', link: '/' },
          { text: 'Open Innovation', link: '/' },
          { text: 'Innovation "Tours of Duty"', link: '/' },
          { text: 'Innovation/Demo/Startup Days', link: '/' },
        ],
      },
      {
        title: 'Data Optimization',
        items: [
          { text: 'ReImagine Data Insights Initiative', link: '/' },
          { text: 'The HHS Data Science CoLab', link: '/' },
          { text: 'HealthData.gov', link: '/' },
        ],
      },
      {
        title: 'Digital Services',
        items: [
          { text: 'Health+', link: '/' },
          { text: 'Indian Health Service Health IT Modernization', link: '/' },
          { text: 'Immunization Gateway', link: '/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'U.S. Department of Health & Human Services',  link: '/' },
      //{ text: 'Another secondary link', link: '/' },
    ],

    // Search.gov configuration
    //
    // 1. Create an account with Search.gov https://search.usa.gov/signup
    // 2. Add a new site.
    // 3. Add your site/affiliate name here.
    searchgov: {
      endpoint: 'https://search.usa.gov', // You should not change this.
      affiliate: 'federalist-uswds-example', // replace this with your search.gov account
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=', // This is placeholder. Not private.
      inline: true, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
    },
    dapAgency: 'GSA',
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
