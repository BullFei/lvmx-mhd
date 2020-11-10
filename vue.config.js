// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      // key: value
      //    key - 前缀
      //    value - 是跟 http-proxy-middleware 相同的一个配置项
      '/migu': {
        target: ' https://query.asilu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/migu': ''
        }
      },
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
