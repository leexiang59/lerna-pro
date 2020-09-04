/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-27 16:29:41
 * @LastEditors: will
 * @LastEditTime: 2020-08-29 18:00:54
 */
import request from '@/utils/request';

// 获取统计数据
export async function fetchAnalysis(params) {
  return request.get('/zhdpjg/manager-api/coldStorage/statistic', { params });
}
