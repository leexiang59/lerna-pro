/*
 * @Description: 设置cookie
 * @Author: will
 * @Date: 2020-09-04 20:50:49
 * @LastEditors: will
 * @LastEditTime: 2020-09-04 21:55:40
 */

export default (name: string, value: string, days: number = 30) => {
  let exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + "; path=/;expires=" + exp.toUTCString();
};
