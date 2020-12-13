const path = require('path')

module.exports = {
  // 基本路劲
  publicPath: process.env.MODE_ENV === 'production' ? '' : '/',
  // 输出路径
  outputDir: process.env.MODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint是否在保存的时候检查
  lintOnSave: true,
  /*
  webpack
  */
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // 生产环境是否生成sourceMap
  productionSourceMap: false,
  // css
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
    }
  },
  // webpack-dev-server
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    hot: true, // 热加载
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3200',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: (app) => {}
  }
  // 第三方插件
  /* pluginOptions: {} */
}
