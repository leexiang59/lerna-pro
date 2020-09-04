/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-27 16:29:41
 * @LastEditors: will
 * @LastEditTime: 2020-08-29 16:26:59
 */
import request from '@/utils/request';

const formatAllEnum = (value) => (value === 'all' ? null : value);

// 获取列表页数据
export async function fetchList(params) {
  const formatParams = {
    ...params,
    coldStorageType: formatAllEnum(params.coldStorageType),
    siteType: formatAllEnum(params.siteType),
    storageType: formatAllEnum(params.storageType),
  };
  return request.get('/zhdpjg/manager-api/coldStorage/page', { params: formatParams });
}

// 获取列表详情页数据 - 进出库明细
export async function fetchDetailsInOutList(params) {
  return request.post('/zhdpjg/manager-api/coldStorage/stock/query-list', { data: params });
}

// 获取列表详情页数据 - 检查记录
export async function fetchDetailsCheckList(params) {
  return request.post('/zhdpjg/manager-api/coldStorage/check-list', { data: params });
}
