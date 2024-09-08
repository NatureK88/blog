import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'

const DOMAIN_NAME = 'blog.talk123studio.com' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default <UserPlugins>[
    [
        "sitemap", // 网站地图
        {
            hostname: WEB_SITE,
        },
    ],



    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！
    ["flexsearch-pro"],


    [
        'one-click-copy', // 代码块复制按钮
        {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },
    ],

    [
        'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        {
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
            },
        },
    ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
        },
    ],

    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        },
    ],
]