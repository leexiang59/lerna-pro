/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-05 15:59:56
 * @LastEditors: will
 * @LastEditTime: 2020-09-06 15:52:03
 */
export default (name: string) => {
  const { cookie } = document;
  if (!cookie) return null;
  const target = cookie.split(";").find((item) => item.includes(name));
  return target ? target.split("=")[1] : null;
};
