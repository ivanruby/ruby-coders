/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'RubyCoders', // Title for your website.
  tagline: 'An online, hands-on approach to learning electronics and computer programming',
  url: 'https://ivanruby.github.io', // Your website URL
  baseUrl: '/ruby-coders/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'rubycoding',
  organizationName: 'EducationMakers',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'join', label: 'Join us'},
    {doc: 'requirements', label: 'Getting started'},
    // {doc: 'educators', label: 'Educators'},
    // {doc: 'about', label: 'About us'},
    {search: true}
  ],
  
  algolia: {
    apiKey: '1b7ed12c8fb2bbf86875d1464be8fc0a',
    appId: '8MYOH7SNMW',
    indexName: 'dev_RUBYCODERS',
    placeholder: 'Ask me something',
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE"]
    }
  },

  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: 'docs/assets/img/logo.png',
  favicon: 'docs/assets/img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#b30e4c',
    secondaryColor: '#4f5b09',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Ivan Ruby with \u2764 at EducationMakers`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
  gaTrackingId: "G-F6PSX1NESH",
  gaGtag: true,
  
  translationRecruitingLink: 'https://crowdin.com/project/rubycoders'
};

module.exports = siteConfig;
