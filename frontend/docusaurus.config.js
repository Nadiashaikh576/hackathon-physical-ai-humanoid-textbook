// @ts-check
// `@type` JSDoc annotations allow IDEs and type-checking tools to autocomplete
// import {themes as prismThemes} from '@docusaurus/module-type-aliases';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI-Native Book: Physical AI & Humanoid Robotics',
  tagline: 'Teaching ROS 2 as the core middleware connecting AI intelligence to humanoid robot bodies',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-deployment-url.com',  // Replace with actual deployment URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ai-book-project', // Usually your GitHub org/user name.
  projectName: 'ai-book', // Usually your repo name.

  onBrokenLinks: 'warn',
  markdown: {
    format: 'mdx',
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  staticDirectories: [],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: './sidebars.js',
        sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nadiashaikh576/hackathon-physical-ai-humanoid-textbook/edit/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog', // URL Route.
          blogTitle: 'Robotics Blog', // The title for the blog. Defaults to 'Blog'
          showReadingTime: true, // Show estimated reading time for the blog post.
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          postsPerPage: 10, // Show all blog posts on the main page
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Local path for social card image
      navbar: {
        title: 'ROS 2 Nervous System',
        logo: {
          alt: 'AI-Native Book Logo',
          src: 'img/logo.svg', // Using default Docusaurus logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modules',
          },
          {
            href: 'https://github.com/Nadiashaikh576/hackathon-physical-ai-humanoid-textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'Module 1: The Robotic Nervous System (ROS 2)',
                to: '/docs/module-1_ros2-nervous-system/intro',
              },
              {
                label: 'Module 2: The Digital Twin (Gazebo & Unity)',
                to: '/docs/module-2_digital-twin-sim/intro',
              },
              {
                label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
                to: '/docs/module-3-isaac-robot-brain/intro',
              },
              {
                label: 'Module 4: Vision-Language-Action (VLA) Humanoid Intelligence',
                to: '/docs/module-4-vla-humanoid-intelligence/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ros2',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/ros2',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Nadiashaikh576/hackathon-physical-ai-humanoid-textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-Native Book Project. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: prismThemes.github,
      //   darkTheme: prismThemes.dracula,
      // },

    }),
};

export default config;