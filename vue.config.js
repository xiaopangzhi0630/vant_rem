// const ENV = process.env.NODE_ENV;
module.exports = {
  // lintOnSave: ENV !== 'production',
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  devServer: {

    // 自动打来浏览器
    open: true,
    // 设置服务的端口号
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7000',
        // target: 'http://localhost:7000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // 配置postcss-px2rem 适配, px 转成 rem
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },

};