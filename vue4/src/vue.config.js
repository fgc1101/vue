module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.tp5.com/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
