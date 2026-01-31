import { defineConfig } from 'vitepress'


export default defineConfig({
  base:'/cloud/'
  title: "Reader",
  description: "yes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前序', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前序',
        items: [
          { text: '公告', link: '/markdown-examples' },
          { text: '一些小知识', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon:'🟡', link: 'https://luogu.com.cn' }
    ]
  }
})
