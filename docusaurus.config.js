// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const site = process.env.SITE;
const api = '/api'
const baseUrl = '/'
const apiUrlSpecification = process.env.API_URL_SPECIFICATION;
const footerElogios = process.env.FOOTER_ELOGIOS;
const footerPoliticasPrivacidade = process.env.FOOTER_POLITICAS_PRIVACIDADE;
const footerPoliticasSeguranca = process.env.FOOTER_POLITICAS_SEGURANCA;

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
    baseUrl: baseUrl,
    footerCopyrightLinks: [
      {
        i18nId: 'copyright.pPrivacidade',
        title: 'Política de Privacidade',
        link: footerPoliticasPrivacidade
      },
      {
        i18nId: 'copyright.pSeguranca',
        title: 'Política de Segurança',
        link: footerPoliticasSeguranca
      },
      {
        i18nId: 'copyright.elogios',
        title: 'Elogios, Sugestões e Reclamações',
        link: footerElogios
      },
    ]

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
        label: 'PT',
        htmlLang: 'pt',
      },
      es: {
        label: 'ES',
        htmlLang: 'es',
      },
      en: {
        label: 'EN',
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
    [
      'docusaurus-lunr-search',
      (
        {
          maxHits: '8',
          languages: ['pt','es','en'],
          excludeRoutes: [
            'docs/manual-oscommerce/**/*'
          ]//remover após regularização do oscommerce
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
          srcDark: 'img/logo-full-dark.svg',
          className: 'brand-logo'
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
            target: '_self',
            className: 'active-on-selected',
          },
          {
            label: 'Integrações',
            type: 'docSidebar',
            sidebarId: 'integrations',
          },
          {
            id: 'paypay',
            href: 'https://www.paypay.pt/',
            label: 'Ir para PayPay.pt',
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
      footer: {
        links: [
          {
            html: `
                <a href="https://www.linkedin.com/company/paypay" target="_blank">
                  <div title="Linkedin" class="footer-social footer-social--lk"></div>
                </a>
              `,
          },
          {
            html: `
                <a href="https://www.youtube.com/user/PayPayPT" target="_blank">
                  <div title="Youtube" class="footer-social footer-social--yt"></div>
                </a>
              `,
          },
        ],
        copyright: `© PayPay ${new Date().getFullYear()} - Todos os direitos reservados`,
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
