module.exports = {
    // theme: 'vdoing', // 使用npm包主题
    title: 'Hello111 VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/images/logo.svg',
        // sidebar: 'structuring',
        repo: 'zx0828',
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: true, // 启用编辑
        editLinkText: '编辑1234',
        nav: [{
            text: 'home',
            link: '/web/',
            // 有二级导航时
            items: [{
                    text: 'foo',
                    link: '/foo/'
                },
                {
                    text: 'bar',
                    link: '/bar/'
                },
            ]
        }],
        sidebar: {
            '/bar/': [{
                title: 'Group 1', // 必要的
                sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
                children: ['/', 'one', 'two']
            }],
            '/foo/': [{
                title: 'Group 1', // 必要的
                children: ['/', 'three', 'four']
            }]
        },
    }
}