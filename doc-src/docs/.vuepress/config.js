module.exports = {
    title: 'Vac Client',
    description: 'Vac Client Doc',
    dest: '../docs',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Vac Client',
            description: 'A fabric utility mod'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '真空客户端',
            description: 'Fabric实用模组'
        }
    },
    themeConfig: {
        logo: 'hero.png',
        sidebar: 'auto',
        repo: 'Vac-Client/vac',
        docsRepo: 'Vac-Client/website',
        docsDir: 'doc-src/docs',
        editLinks: true,
		smoothScroll: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en')
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
            }
        }
    }
}