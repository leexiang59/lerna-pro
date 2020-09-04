/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-30 17:20:18
 * @LastEditors: will
 * @LastEditTime: 2020-08-31 10:21:31
 */

import { toFix } from '@/utils/utils';

export default () => [
  {
    title: '入库日期',
    dataIndex: 'operateDateForamt',
    valueType: 'dateRange',
    hideInTable: true,
  },
  {
    title: '供应商/委托方',
    dataIndex: 'condition',
    hideInTable: true,
  },
  {
    title: '入库日期',
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
    title: '入库重量(kg)',
    dataIndex: 'weight',
    hideInSearch: true,
    render: (text) => toFix(text, 2),
  },
  {
    title: '供应商/委托方',
    dataIndex: 'supplierName',
    ellipsis: true,
    width: 200,
    hideInSearch: true,
  },
  {
    title: '贮存冷库',
    dataIndex: 'operateColdName',
    hideInSearch: true,
    width: 100,
  },
  {
    title: '贮存方式',
    dataIndex: 'storageWay',
    hideInSearch: true,
    width: 80,
    valueEnum: {
      1: {
        text: '冷冻',
      },
      2: {
        text: '冷藏',
      },
    },
  },
  {
    title: '产地',
    dataIndex: 'place',
    hideInSearch: true,
    width: 80,
    valueEnum: {
      1: {
        text: '国内',
      },
      2: {
        text: '国外',
      },
    },
  },
  {
    title: '国家/省市',
    dataIndex: 'inCountryName',
    hideInSearch: true,
  },
  {
    title: '商品条形码',
    dataIndex: 'barCode',
    hideInSearch: true,
  },
  {
    title: '生产批号',
    dataIndex: 'productNo',
    hideInSearch: true,
  },
  {
    title: '入库重量(kg)',
    dataIndex: 'weight',
    hideInSearch: true,
  },
  {
    title: '来源冷库',
    dataIndex: 'coldSource',
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
    title: '冷库名称',
    dataIndex: 'otherColdName',
    hideInSearch: true,
  },
  {
    title: '进货台账/核酸检测报告',
    dataIndex: '',
    hideInSearch: true,
  },
];
