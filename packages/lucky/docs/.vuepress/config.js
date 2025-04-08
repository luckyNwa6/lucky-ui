const path = require('path')
const demoBlock = require('./plugins/vuepress-plugin-demo-block-vue')
module.exports = {
  title: 'Lucky-Ui', // 网站的标题
  description: '👻基于Element-Ui搭建的个人组件库💘', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: 'https://imgs.luckynwa.top/profile/luckyUi/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签'/imgs/logo.png'
  ],
  host: '0.0.0.0',
  port: 3002,
  // host port在本地运行就不配置了
  themeConfig: {
    themeConfig: {
      search: false, // 设置是否使用导航栏上的搜索框
      searchMaxSuggestions: 10 // 搜索框显示的搜索结果数量
    },
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: '首页', link: '/' },
      { text: '组件库', link: '/guide/' }
    ],
    sidebar: [
      '/guide/',
      '/guide/buttonS',
      '/guide/starS',
      '/guide/clockS',
      '/guide/wordS',
      '/guide/mouseS'
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './../examples')
      }
    ],
    demoBlock({
      componentsDir: path.resolve(__dirname, './../examples')
    })
  ]
}
