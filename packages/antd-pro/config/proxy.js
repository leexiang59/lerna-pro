/*
 * @Description:在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * @Author: will
 * @Date: 2020-08-27 15:49:22
 * @LastEditors: will
 * @LastEditTime: 2020-08-29 16:24:26
 */
export default {
  dev: {
    '/zhdpjg/manager-api/': {
      target: 'http://47.112.167.250:9002/', // 开发环境
      // target: 'http://192.168.198.26:9002', // 竞雄
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
