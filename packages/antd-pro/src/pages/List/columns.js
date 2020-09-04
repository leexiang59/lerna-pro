import React from 'react';
import { Link } from 'umi';
import LkAddress from './components/LkAddress';

export default (props) => [
  {
    title: '冷库编号',
    dataIndex: 'no',
    copyable: true,
    width: 160,
  },
  {
    title: '冷库名称',
    dataIndex: 'name',
  },
  {
    title: '冷库面积(㎡)',
    dataIndex: 'acreage',
    hideInSearch: true,
    width: 120,
  },
  {
    title: '入库产品量(吨)',
    dataIndex: 'capacity',
    hideInSearch: true,
    width: 120,
  },
  {
    title: '冷库地址',
    dataIndex: 'address',
    ellipsis: true,
    hideInSearch: true,
    width: 200,
  },
  {
    title: '贮存品种',
    dataIndex: 'storageNameList',
    render: (text) => (text ? text.join('、') : ''),
    hideInSearch: true,
  },
  {
    title: '场所类型',
    dataIndex: 'siteTypeName',
    width: 120,
    hideInSearch: true,
  },
  {
    title: '所属企业',
    dataIndex: 'entName',
  },
  {
    title: '状态',
    dataIndex: 'useStatus',
    hideInSearch: true,
    width: 80,
    valueEnum: {
      1: {
        text: '正常',
        status: 'Success',
      },
      0: {
        text: '停用',
        status: 'Error',
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    dataIndex: 'id',
    width: 80,
    render: (text, record) => [
      <Link key={`view_${text}`} onClick={() => props.handleView(text, record)}>
        查看
      </Link>,
    ],
  },

  {
    title: '社会信用代码',
    dataIndex: 'unifySocialCreditCode',
    hideInTable: true,
  },
  {
    title: '许可证编号',
    dataIndex: 'permitNo',
    hideInTable: true,
  },
  {
    title: '区域',
    dataIndex: 'areaStreet',
    hideInTable: true,
    renderFormItem: (_, itemProps) => <LkAddress {...itemProps} placeholder="请选择区域" />,
  },
  {
    title: '冷库类型',
    dataIndex: 'coldStorageType',
    hideInTable: true,
    valueEnum: {
      all: '全部',
      A: '冷冻库',
      B: '冷藏库',
      C: '综合库',
    },
  },
  {
    title: '场所类型',
    dataIndex: 'siteType',
    hideInTable: true,
    valueEnum: {
      all: '全部',
      A: '农贸市场（含批发市场）',
      B: '食品生产加工企业',
      C: '餐饮服务单位',
      D: '商场超市',
      E: '其他食品经营者',
      F: '第三方',
      G: '冷链物流企业',
    },
  },
  {
    title: '贮存品种',
    dataIndex: 'storageType',
    hideInTable: true,
    valueEnum: {
      all: '全部',
      A: '肉及肉制品',
      B: '水产品',
      C: '蔬菜水果',
      D: '乳制品',
      E: '特殊食品',
      F: '调味品',
      G: '饮料',
      H: '冷冻饮品（雪糕等）',
      I: '速冻食品',
      J: '酒类',
      K: '其他',
    },
  },
];
