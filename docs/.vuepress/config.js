const plugins = require('./plugins/plugins.js');
module.exports = {
    theme: 'vdoing', // 使用npm包主题
    title: '知识库',
    description: '好好学习，每天进步一点',
    head: [
        ["link", {
            rel: "icon",
            href: "/img/favicon.ico"
        }]
    ],
    base: "/zx_docs/",
    themeConfig: {
        logo: '/img/logo.svg',
        sidebar: 'structuring',
        repo: 'zx0828',
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: true, // 启用编辑
        editLinkText: '编辑',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                link: '/web/'
            },
            {
                text: '后端',
                link: '/serve/'
            },
            {
                text: '框架',
                link: '/technology/'
            },
            {
                text: '云技术',
                link: '/technology/'
            },
            {
                text: '收藏',
                link: '/pages/beb6c0bd8a66cea6/',
                items: [{
                        text: '网站',
                        link: '/pages/beb6c0bd8a66cea6/'
                    },
                    {
                        text: '资源',
                        link: '/pages/eee83a9211a70f9d/'
                    },
                    {
                        text: 'Vue资源',
                        link: '/pages/12df8ace52d493f6/'
                    },
                ],
            },
            {
                text: '更多',
                link: '/more/',
                items: [{
                        text: '学习',
                        link: '/pages/f2a556/'
                    },
                    {
                        text: '面试',
                        link: '/pages/aea6571b7a8bae86/'
                    },
                    {
                        text: '心情杂货',
                        link: '/pages/2d615df9a36a98ed/'
                    },
                    {
                        text: '实用技巧',
                        link: '/pages/baaa02/'
                    },
                    {
                        text: '友情链接',
                        link: '/friends/'
                    },
                ],
            },
            {
                text: '其他',
                link: '/other/'
            },
            {
                text: '索引',
                link: '/archives/',
                items: [{
                        text: '分类',
                        link: '/categories/'
                    },
                    {
                        text: '标签',
                        link: '/tags/'
                    },
                    {
                        text: '归档',
                        link: '/archives/'
                    },
                ]
            }
        ],
        bodyBgImg: [
            `/zx_docs/img/a.jpeg`,
            `/zx_docs/img/b.jpeg`,
            `/zx_docs/img/c.jpeg`,
            `/zx_docs/img/d.jpeg`
        ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
        bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
    },
    plugins
}