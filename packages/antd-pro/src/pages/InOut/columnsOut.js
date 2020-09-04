/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-30 17:20:18
 * @LastEditors: will
 * @LastEditTime: 2020-08-31 10:24:12
 */

import { toFix } from '@/utils/utils';

export default () => [
  {
    title: '出库日期',
    dataIndex: 'operateDateForamt',
    valueType: 'dateRange',
    hideInTable: true,
  },
  {
    title: '收货方名称',
    dataIndex: 'condition',
    hideInTable: true,
  },
  {
    title: '出库日期',
    dataIndex: 'operateDate',
    fixed: 'left',
    width: 130,
    hideInSearch: true,
  },
  {
    title: '商品名称',
    dataIndex: 'productName',
    ellipsis: true,
    hideInSearch: true,
    width: 140,
  },
  {
    title: '贮存子品种',
    dataIndex: 'storageType',
    hideInSearch: true,
  },
  {
    title: '出库重量(kg)',
    dataIndex: 'weight',
    hideInSearch: true,
    render: (text) => toFix(text, 2),
  },
  {
    title: '出库冷库',
    dataIndex: 'operateColdName',
    hideInSearch: true,
  },
  {
    title: '库存量',
    dataIndex: 'leftCapacity',
    hideInSearch: true,
    width: 100,
  },
  {
    title: '商品去向',
    dataIndex: 'productDirection',
    hideInSearch: true,
    width: 80,
    valueEnum: {
      1: {
        text: '本市',
      },
      2: {
        text: '市外',
      },
    },
  },

  {
    title: '主体/个人',
    dataIndex: 'owner',
    hideInSearch: true,
    width: 80,
    valueEnum: {
      1: {
        text: '主体',
      },
      2: {
        text: '个人',
      },
    },
  },
  {
    title: '收货方名称',
    dataIndex: 'consigneeName',
    hideInSearch: true,
  },
  {
    title: '主体名称',
    dataIndex: 'subjectName',
    hideInSearch: true,
  },
  {
    title: '是否有冷库',
    dataIndex: 'isCold',
    hideInSearch: true,
    valueEnum: {
      1: {
        text: '是',
      },
      0: {
        text: '否',
      },
    },
  },
  {
    title: '冷库名称',
    dataIndex: 'otherColdName',
    hideInSearch: true,
  },
];
