/*
 * @Description: 清除指定cookie
 * @Author: will
 * @Date: 2020-09-06 15:55:32
 */
export default (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
