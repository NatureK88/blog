import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import htmlModules from "./htmlModules"

export default <VdoingThemeConfig>{
    // 导航配置
    nav: [
        { text: '首页', link: '/' },
        {
            text: '物理学',
            link: '/Physics/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
            items: [
                {
                    text: '经典力学',
                    link: '/ClassicalMechanics/'
                },
                {
                    text: '光学',
                    link: '/Optics/'
                },
                {
                    text: '电磁学',
                    link: '/Electromagnetism/'
                },
                {
                    text: '量子力学',
                    link: '/QuantumMechanics/'
                },
            ],
        },
        {
            text: '计算机',
            link: '/ComputerScience/',
            items: [
                { text: '计算机原理', link: '/BuildComputer/' },
                { text: '算法导论', link: '/AlgorithmNoob/' },
            ],
        },
        {
            text: '其他学科',
            link: '/OtherSubjects/',
            items: [
                { text: '化学', link: '/Chemical/' },
                { text: '生物医疗', link: '/BiologyMedicine/' },
                { text: '经济学', link: '/Economics/' },
            ],
        },
        {
            text: '科学实践',
            link: '/Practics/',
            items: [
                { text: '案例解析', link: '/ProjectAnalysis/' },
                { text: '十万个为什么', link: '/ScienceAround/' },
            ],
        },
        {
            text: '教程',
            link: '/Tutorial/',
            items: [
                {
                    text: '多媒体制作',
                    items: [
                        { text: 'blender', link: '/ScienceAround/' },
                        { text: 'blender', link: '/ScienceAround/' },
                        { text: 'blender', link: '/ScienceAround/' },
                    ]
                },
                {
                    text: '文档管理',
                    items: [
                        { text: 'obsidian', link: '/ScienceAround/' },
                        { text: '其他工具', link: '/ScienceAround/' },
                    ]
                },
                {
                    text: '实用编程',
                    items: [
                        { text: 'obsidian', link: '/ScienceAround/' },
                        { text: '其他工具', link: '/ScienceAround/' },
                    ]
                },
            ],
        },
        {
            text: '随笔',
            link: '/TalkChat/',
            items: [
                { text: '拉拉家常', link: '/pages/10f68aef/' },
                { text: '生活感悟', link: '/pages/eee83a9211a70f9d/' },
            ],
        },
        {
            text: '索引',
            link: '/archives/',
            items: [
                { text: '分类', link: '/categories/' },
                { text: '标签', link: '/tags/' },
                { text: '归档', link: '/archives/' },
            ],
        },
    ],


    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.webp', // 导航栏logo
    repo: 'NatureK88', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '帮助编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    updateBar: { // 最近更新栏
        showToArticle: false, // 显示到文章页底部，默认true
        moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    // author: {
    //   name: 'NatureK', // 必需
    //   link: 'https://space.bilibili.com/111389648?spm_id_from=333.1007.0.0', // 可选的
    // },
    author: 'NatureK',

    // 博主信息 (显示在首页侧边栏)
    blogger: {
        avatar: 'img/凤王.png',
        name: '📖 积土成山，💪🏻 聚沙成塔。🔨 多干事实，🐸 少点哔哔。'
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
        // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
        icons: [
            {
                iconClass: 'icon-youjian',
                title: '发邮件',
                link: 'mailto:894072666@qq.com',
            },
            {
                iconClass: 'icon-bilibili',
                title: 'GitHub',
                link: 'https://space.bilibili.com/111389648?spm_id_from=333.1007.0.0',
            },
        ],
    },

    // 页脚信息
    footer: {
        createYear: 2024, // 博客创建年份
        copyrightInfo:
            'NatureK', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },
    //     copyrightInfo:
    //         'NatureK | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a> | <a href="http://beian.miit.gov.cn/" target="_blank">桂ICP备2024034950号</a> | <img src="/img/beian.png" style="width: 15px; margin-bottom: -3px;" /> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=45142202000030" rel="noreferrer" target="_blank">桂公网安备45142202000030</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    // },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
        // author: {
        //   name: 'xugaoyi',
        //   link: 'https://github.com/xugaoyi'
        // }
        author: 'NatureK'
    },


    // 自定义hmtl(广告)模块
    htmlModules,
}