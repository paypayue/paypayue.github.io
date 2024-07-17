// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const site = process.env.SITE;
const api = '/api'
const baseUrl = '/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PayPay - API documentation',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: site,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'paypayue', // Usually your GitHub org/user name.
  // projectName: process.env.PROJECT_NAME, // Usually your repo name.
  // deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  customFields : {
    docsApi: site + api,
    baseUrl: baseUrl
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt','es','en'],
    path: './i18n',
    localeConfigs: {
      pt: {
        label: 'Português',
        htmlLang: 'pt',
      },
      es: {
        label: 'Español',
        htmlLang: 'es',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          path: './docs',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   '@scalar/docusaurus',
    //   /**@type {import('@scalar/docusaurus').ScalarOptions} */
    //   (
    //     {
    //       label: 'Especificação',
    //       route: api,
    //       configuration: {
    //         spec: {
    //           url: process.env.API_URL_SPECIFICATION,
    //         },
    //       },
    //     }
    //   )
    // ],
    [
      '@easyops-cn/docusaurus-search-local',
      (
        {
          hashed: true,
          indexDocs: true,
          indexPages: false,
          indexBlog: false,
          language: ['pt','es','en'],
          explicitSearchResultPath: true,
          ignoreFiles: [/docs\/manual-oscommerce\/oscommerce\/.*/],//remover após regularização do woocommerce
          searchBarShortcutHint: false
        }
      )
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      navbar: {
        logo: {
          alt: 'Home',
          src: 'img/logo-full.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            position: 'left',
            label: 'Guias',
          },
          {
            id: 'specification',
            label: 'Especificação',
            href: site + api,
            target: '_self'
          },
          {
            label: 'Integrações',
            to: 'integrations'
          },
          {
            href: 'https://www.paypay.pt/',
            label: 'PayPay',
            target: '_self',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
            className: 'searchbar--on-dark'
          }
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'php',
          'json'
        ],
      },
    }),
};

module.exports = config;
