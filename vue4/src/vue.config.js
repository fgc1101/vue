module.exports = {
  devServer: {
    host: 'http://localhost',
    port: '8080',
    proxy: {
      '/api/': {
        target: 'http://www.tp5.com', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
