import { HeadTags } from 'vuepress/config';


export default <HeadTags>[

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]

    ['link', { rel: 'icon', href: '/img/logo.webp' }], //favicons，资源放在public文件夹
    // [
    //   'meta',
    //   {
    //     name: 'keywords',
    //     content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    //   },
    // ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    [
        "link",
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css",
        },
    ], // 让md支持数学公式
    [
        "link",
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js",
        },
    ], // 让md支持数学公式
]