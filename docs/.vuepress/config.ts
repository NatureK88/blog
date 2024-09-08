import { resolve } from 'path'
import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import { katex } from '@mdit/plugin-katex'

import head from "./config/head"
import plugins from "./config/plugins"
import themeConfig from "./config/themeConfig"



export default defineConfig4CustomTheme<VdoingThemeConfig>({
  // theme: 'vdoing', // 使用npm主题包
  theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  // base: "/blog/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "物物和语语",
      description: '科学应该是清晰、易懂、自恰的',

    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  head,
  plugins,
  themeConfig,


  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    extendMarkdown: (md) => {
      md.use(katex);
      md.linkify.set({ fuzzyEmail: false });
    },
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
