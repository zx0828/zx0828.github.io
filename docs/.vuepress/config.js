const plugins = require('./plugins/plugins.js');
module.exports = {
    theme: 'vdoing', // 使用npm包主题
    title: '知识库',
    description: '好好学习，每天进步一点',
    head: [
        ["link", { rel: "icon", href: "/img/favicon.ico" }]
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
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                link: '/web/'
            },
            {
                text: '后端',
                link: '/serve/'
            }, {
                text: '云技术',
                link: '/technology/'
            },
            {
                text: '更多',
                link: '/more/'
            }, 
            {
                text: '其他123',
                link: '/other/'
            },
            {
                text: '收藏',
                link: '/favorite/'
            }],
        bodyBgImg: [
            `/img/a.jpeg`,
            `/img/b.jpeg`,
            `/img/c.jpeg`,
            `/img/d.jpeg`
        ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
        bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
    },
    plugins
}