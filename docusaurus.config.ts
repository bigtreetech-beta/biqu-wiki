import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {default as custom_code_themes} from './src/theme/prism-custom-code-themes';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BIQU WiKi',
  tagline: 'For Maker By Maker',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://global.biquwiki.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bigtreetech-beta', // Usually your GitHub org/user name.
  projectName: 'biqu-wiki', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      "zh-Hans": {
        label: '简体中文',
        baseUrl: '/zh'
      },
      "en": {
        label: 'English',
        baseUrl: '/en',
        htmlLang: 'en-US',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.webp',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },
    navbar: {
      title: 'BIQU WiKi',
      logo: {
        alt: 'biqu logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Panda Series',
        },
        { to: 'https://neo.bttwiki.com', label: 'DIY 系列', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        }
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Panda Series',
              to: '/docs/panda-series-intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'BIQU Facebook Group',
              href: 'https://www.facebook.com/groups/biqu3dprinter',
            },
            {
              label: 'BIQU Reddit Community',
              href: 'https://www.reddit.com/r/BIQU/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bigtreetech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BIQU Wiki Team`,
    },
    prism: {
      theme: custom_code_themes,
      darkTheme: custom_code_themes,
      additionalLanguages: ['bash','systemd'],
    },
    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(20, 20, 20)'
      },
      config: {}
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
