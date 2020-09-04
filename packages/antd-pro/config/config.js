/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-27 15:49:22
 * @LastEditors: will
 * @LastEditTime: 2020-08-30 20:03:00
 */
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './route';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  history: {
    type: 'hash',
  },
  // base: '/zhdpjg/manager-pc/',
  publicPath: '/zhdpjg/manager-pc/',
  routes,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
