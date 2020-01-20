var path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    runtimeCompiler: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('static', resolve('static'))
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
//   devServer: {
//     open: process.platform === 'darwin',
//     host: 'localhost',
//     port: 8080,
//     open: true, //配置自动启动浏览器
//       proxy: {
//         '/api': {
//           target: 'http://crm-center.zvcms.com/', //对应自己的接口
//         //   target: 'https://inapi.zmcms.cn/', //对应自己的接口
//           changeOrigin: true,
//           pathRewrite: {
//             '^/api': ''
//           }
//         }
//       }
//   },
}