import {resolve} from 'path'
import {defineConfig4CustomTheme} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Evan's blog",
      description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      {text: '首页', link: '/'},
      {
        text: 'Java',
        //link: '/front-end/',
        items: [
          {
            text: 'Java基础',
            link: '/java/',
          },
          {
            text: 'Java高级',
            items: [
              {text: 'Java并发', link: '/note/es6/'},
              {text: 'Java虚拟机', link: '/note/es6/'},
              {text: 'JDK新特性', link: '/note/es6/'},
            ],
          },
          {
            text: 'Java Web',
            link: '/note/es6/'
            // items: [
            //   { text: 'Java并发', link: '/note/es6/' },
            //   { text: 'Java虚拟机', link: '/note/es6/' },
            //   { text: 'JDK新特性', link: '/note/es6/' },
            // ],
          },
          {
            text: '数据结构与算法',
            link: '/note/es6/'
          },
          {
            text: '计算机网络',
            link: '/note/es6/'
          },
        ],
      },
      {
        text: '框架',
        //link: '/back-end/',
        items: [
          {
            text: 'Spring',
            link: '/back-end/',
          },
          {
            text: 'Spring MVC',
            link: '/back-end/',
          },
          {
            text: 'Spring Boot',
            link: '/back-end/',
          },
          {
            text: 'Spring Cloud',
            link: '/back-end/',
          },
          {
            text: 'Spring Cloud Alibaba',
            link: '/back-end/',
          },
          {
            text: 'Spring Security',
            link: '/pages/c55839/',
          },
          {
            text: 'Mybatis',
            link: '/back-end/',
          },
          {
            text: 'Mybatis Plus',
            link: '/back-end/',
          },
          {
            text: 'Mysql',
            link: '/back-end/',
          },
          {
            text: 'Redis',
            link: '/back-end/',
          },
          {
            text: 'Zookeeper',
            link: '/back-end/',
          },
          {
            text: 'Dubbo',
            link: '/back-end/',
          },
          {
            text: 'Kafka',
            link: '/back-end/',
          },
          {
            text: 'Apollo',
            link: '/back-end/',
          },
          {
            text: '大数据',
            link: '/back-end/',
            items: [
              {text: 'Hbase', link: '/pages/261b24/'},
              {text: 'Spark', link: '/pages/c55839/'},
              {text: 'ClickHouse', link: '/note/git/'},
            ],
          },
        ],
      },
      {
        text: '前端',
        link: '/front-end/',
        items: [
          {
            text: 'HTML',
            link: '/back-end/',
          },
          {
            text: 'Javascript',
            link: '/back-end/',
          },
          {
            text: 'CSS',
            link: '/back-end/',
          },
          {
            text: 'ES6',
            link: '/back-end/',
          },
          {
            text: 'Nodejs',
            link: '/back-end/',
          },
          {
            text: 'Webpack',
            link: '/back-end/',
          },
          {
            text: 'Vue',
            link: '/back-end/',
            items: [
              {text: 'Vue Router', link: '/pages/8309a5b876fc95e3/'},
              {text: 'Vuex', link: '/pages/0a83b083bdf257cb/'},
              {text: 'ES6', link: '/note/es6/'},
            ],
          },
        ],
      },
      {
        text: '架构',
        link: '/design/',
        items: [
          {
            text: '设计模式',
            link: '/back-end/',
          }
        ]
      },
      {
        text: '运维',
        link: '/operation/',
        items: [
          {
            text: 'Linux',
            link: '/back-end/',
          },
          {
            text: 'Shell脚本',
            link: '/back-end/',
          },
          {
            text: 'Docker',
            link: '/back-end/',
          },
          {
            text: 'Kubernetes',
            link: '/back-end/',
          },
        ],
      },
      {
        text: '工具',
        link: '/tools/',
        items: [
          {
            text: 'Maven',
            link: '/back-end/',
          },
          {
            text: 'SVN',
            link: '/back-end/',
          },
          {
            text: 'Git',
            link: '/back-end/',
          },
          {
            text: 'Idea',
            link: '/back-end/',
          },
          {
            text: 'Windows',
            link: '/back-end/',
          },
        ],
      },
      {
        text: '面试',
        link: '/interview/',
        items: [
          {
            text: '数据结构与算法',
            link: '/back-end/',
          },
          {
            text: 'Java',
            link: '/pages/bbda94/',
          },
          {
            text: '框架',
            link: '/back-end/',
          },
          {
            text: '分布式',
            link: '/back-end/',
          },
        ]
      },
      {
        text: '更多',
        link: '/technology/',
        items: [
          {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
          {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
          {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
          {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
        ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          {text: '分类', link: '/categories/'},
          {text: '标签', link: '/tags/'},
          {text: '归档', link: '/archives/'},
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo-star.jpg', // 导航栏logo
    repo: 'zx20100143/', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'zx', // 必需
      // link: 'https://github.com/xugaoyi', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/avatar.jpg',
      name: '星星',
      slogan: '一个普通Java程序员的自我修养',
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
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/zx20100143',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'zx | <a href="#" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'Java, Java后端，面试，并发，虚拟机，spring，mybatis，zookeeper，kafka，dubbo，docker，k8s，apollo，git，maven，idea，vue，webpack，html，js，css，nodejs',
      },
    ],
    ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}], // 百度统计的站长验证（你可以去掉）
    ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: {
    // 导入本地插件（供学习参考）
    // [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // },

    // 百度自动推送
    'vuepress-plugin-baidu-autopush': {},

    // 百度统计
    'vuepress-plugin-baidu-tongji': {
      hm: baiduCode,
    },

    // 全文搜索
    'fulltext-search': {},

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    // 代码块复制按钮
    'one-click-copy': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },

    // 评论区
    'vuepress-plugin-comment': {
      choosen: 'gitalk',
      options: {
        clientID: 'a6e1355287947096b88b',
        clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
        repo: 'blog-gitalk-comment', // GitHub 仓库
        owner: 'xugaoyi', // GitHub仓库所有者
        admin: ['xugaoyi'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },

    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY-MM-DD, HH:mm:ss')
      },
    },
  },

  markdown: {
    lineNumbers: true
  }
})
