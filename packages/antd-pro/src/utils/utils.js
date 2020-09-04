/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-28 21:45:09
 * @LastEditors: will
 * @LastEditTime: 2020-09-02 09:34:11
 */
import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
  const authority = router.find(
    ({ routes, path = '/', target = '_self' }) =>
      (path && target !== '_blank' && pathRegexp(path).exec(pathname)) ||
      (routes && getAuthorityFromRouter(routes, pathname)),
  );
  if (authority) return authority;
  return undefined;
};
export const getRouteAuthority = (path, routeData) => {
  let authorities;
  routeData.forEach((route) => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      } // exact match

      if (route.path === path) {
        authorities = route.authority || authorities;
      } // get children authority recursively

      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

// 获取cookie
export const getCookie = (name) => {
  let arr;
  const regCookie = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(regCookie))) {
    return unescape(arr[2]);
  }
  return null;
};

export const setCookie = (name, value, Days = 300) => {
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + escape(value) + '; path=/;expires=' + exp.toGMTString();
};

// 格式化数字
export const toFix = (value, len = 0) => (value ? Number(value).toFixed(len) : 0);

// 获取页面路径search参数
export const getSearchParams = (search = window.location.search) => {
  if (!search) return {};
  const paramsObj = {};
  const searchStr = search.split('?');
  const paramsArr = searchStr ? searchStr[1]?.split('&') : [];
  paramsArr?.forEach((item) => {
    const itemArr = item.split('=');
    paramsObj[itemArr[0]] = itemArr[1];
  });
  return paramsObj;
};

// 字符脱敏处理
export const hideSensitive = (str, len = 1) => {
  if (!str) return '';
  const strLen = str.length;
  let characters = '';
  for (let i = 1; i < strLen - len; i++) {
    characters += '*';
  }
  return `${str.substring(0, len)}${characters}`;
};
