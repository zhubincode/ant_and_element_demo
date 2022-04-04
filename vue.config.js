module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  // baseUrl: '/',3.0 被弃用改为 publicPath
  outputDir: "dist",
  /* assetsPublicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',*/
  // publicPath:'./',
  assetsDir: "assets",
  publicPath: "./",
  devServer: {
    /* open: true,
         host: "localhost", //本地真机测试
       // host: "localhost",
       port: 8888,*/
    // proxy: {
    //     '/api': {
    //         target: 'http://wjdr.51xpx.com/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     },
    //     '/baofoo': {
    //         target: 'https://bht.mandao.com',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/baofoo': ''
    //         }
    //     }
    // },
    stats: {
      children: false,
    },
  },
};
