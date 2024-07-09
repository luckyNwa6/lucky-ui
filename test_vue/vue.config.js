/*
 * @Author: luckyNwa
 * @Date: 2023-04-17 15:14:06
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static', //打包配置文件
  parallel: false,
  publicPath: './',
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:10327/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
