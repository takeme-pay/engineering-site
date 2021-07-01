const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://engineering.takeme.com/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.takeme.com/wp-content/themes/takeme/img/hlogo.png',
    logoLink: 'https://takeme.com/',
    title:
      "<a href='https://engineering.takeme.com/'>Engineering</a>",
    githubUrl: 'https://github.com/takeme-pay',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/takeme_co_ltd" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.facebook.com/japanfoodie" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://www.takeme.com/wp-content/themes/takeme/img/sn_fb.png' alt={'TakeMe Facebook'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/culture',
      '/technology-stack',
      '/open-source',
      '/blog',
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock',
    ],
    links: [{ text: 'TakeMe', link: 'https://www.takeme.com/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://engineering.takeme.com'>Engineering Portal</a>",
  },
  siteMetadata: {
    title: 'Engineering Portal | TakeMe',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/takeme-pay/takeme-pay.github.io/tree/master/content',
    favicon: 'https://www.takeme.com/wp-content/themes/takeme/img/favicon.png',
  },
  pwa: {
    enabled: false,
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
