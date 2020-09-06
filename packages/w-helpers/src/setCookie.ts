/*
 * @Description: 设置cookie
 * @Author: will
 * @Date: 2020-09-04 20:50:49
 * @LastEditors: will
 * @LastEditTime: 2020-09-06 15:44:47
 */

export default (name: string, value: string, days: number = 30) => {
  let exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; path=/; expires=${exp.toUTCString()}`;
};
