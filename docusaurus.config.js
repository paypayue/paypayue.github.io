// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const site = process.env.SITE;
const api = '/api'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PayPay - Api documentation',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: site,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paypayue', // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME, // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  customFields : {
    docsApi: site + api
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
          routeBasePath: '/',
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
    [
      '@scalar/docusaurus',
      /**@type {import('@scalar/docusaurus').ScalarOptions} */
      (
        {
          label: 'Especificação',
          route: api,
          configuration: {
            spec: {
              url: process.env.API_URL_SPECIFICATION,
            },
          },
        }
      )
    ],
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
        title: 'Guias',
        logo: {
          alt: 'Home',
          src: 'img/logo.svg',
        },
        items: [
          {
            id: 'specification',
            label: 'Especificação',
            href: site + api,
            target: '_self'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
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
