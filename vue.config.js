const CompressionPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = /\.(js|css|html|json|svg|jpe?g|gif|png|mp4|woff2?|eot|ttf|otf)$/
const TEST_API = 'https://www.yo-test.com/'
module.exports = {
  // 上线部署
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? 'https://id1688-asia-cdn.daxingj.com/'
  //   : '/',

  // 本地调试部署,上线前注释掉publicPath,使用上面的，同时在public/index.html中把bootcdn注释掉或者删除，切换到上线CDN
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  /* eslint-disable */
  // webpack中有链式配置，不使用代码检查
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 生产环境代码移除console、debugger
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
      // 以下库文件不打包，在index.html中配置使用CDN加载
      config.externals = {
        'vue': 'Vue',
        'axios':'axios',
        'vant': 'ELEMENT',
        'jquery': 'window.$',
        'vue-router': 'VueRouter',
      }
      // 生产环境构建开启gzip压缩
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip', // 使用gzip算法
            test: productionGzipExtensions, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
            minRatio: 0.8,
            deleteOriginalAssets: false, // 压缩后保留原文件
          }),
        ]
      }
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    // 链式配置,用来修改webpack默认配置，自定义细粒度操作
    // 移除 prefetch 插件,移动端这个移除比较好。
    config.plugins.delete('prefetch')
    // 更改index.html的title标签
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '我的地盘'
        return args
      })
    // 10k以下图片转为base64格式内联到css中，支持图片格式png|jpe?g|gif|webp|svg
    // 视频和字体的压缩方式和图片一样
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return Object.assign(options, { limit: 10240 })
      })
    config.module
      .rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        Object.assign(options, { limit: 10240 })
      })
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        Object.assign(options, { limit: 10240 })
      })
  },
  // 初始化浏览器环境
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/main.scss";`
      }
    }
  },
  /* eslint-enable */
  // 恢复代码检查
  devServer: {
    // 服务启动后自动打开默认浏览器
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    // 热更新模式已经内置
    hotOnly: false,
    // 是否启用gzip压缩
    compress: true,
    // 服务启动时优先加载自定义中间件
    before: (app) => {}
  }
}
