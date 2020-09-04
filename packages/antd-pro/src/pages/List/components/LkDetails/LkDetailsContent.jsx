/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-28 14:24:11
 * @LastEditors: will
 * @LastEditTime: 2020-09-01 11:42:27
 */
import React from 'react';
import { Link } from 'umi';
import { Descriptions, Divider } from 'antd';
import { fetchDetailsCheckList, fetchDetailsInOutList } from '@/services/list';
import { hideSensitive, toFix } from '@/utils/utils';
import LkDetailsTable from './LkDetailsTable';

// 贮存进口冻肉或水产品
const MEAT_WATERFLAG = {
  0: '否',
  1: '是',
};

const items = (props) => {
  return [
    {
      title: '基本信息',
      list: [
        {
          label: '冷库名称',
          value: props.name,
        },
        {
          label: '冷库编号',
          value: props.no,
        },
        {
          label: '备案编号',
          value: props.recordNo,
        },

        {
          label: '冷库地址',
          value: props.address,
        },
        {
          label: '场所类型',
          value: props.siteTypeName,
        },
        {
          label: '冷库类型',
          value: props.coldStorageTypeName,
          empty: '冷冻',
        },
        {
          label: '所属区',
          value: props.areaName,
        },
        {
          label: '所属街道',
          value: props.streetName,
        },
        {
          label: '冷库面积(㎡)',
          value: props.acreage,
        },
        {
          label: '冷库容量(立方米)',
          value: props.allCapacity,
        },
        {
          label: '直接接触冷冻肉制品和水产品的人员数量',
          value: props.meatWaterPeopleCount,
        },
      ],
    },
    {
      title: '主体信息',
      list: [
        {
          label: '冷库所属企业主体名称',
          value: props.entName,
        },
        {
          label: '社会信用代码',
          value: props.unifySocialCreditCode,
        },
        {
          label: '法定代表人',
          value: hideSensitive(props.legal),
        },
        {
          label: '许可证号',
          value: props.permitNo
            ? `${props.permitNo}(${props.permitNoType || '食品经营许可证'})`
            : null,
        },
        {
          label: '企业地址',
          value: props.entAddress,
        },
      ],
    },
    {
      title: '经营信息表',
      list: [
        {
          type: 'title-2',
          label: '库存信息',
        },
        {
          label: '贮存品种',
          value: props.storageNameList ? props.storageNameList.join(',') : null,
        },
        {
          label: '入库产品量(吨)',
          value: props.capacity,
        },
        {
          label: '是否贮存进口冷冻肉制品或水产品',
          value: props.isImportMeatWater === 1 ? '是' : '否',
        },
        {
          label: '更新日期',
          value: props.updateTime,
        },
        {
          type: 'custom',
          component: (
            <LkDetailsTable
              tableProps={{
                title: () => (
                  <div className="lk-table-header">
                    <h4 className="lk-table-title">进出库明细</h4>
                    <Link to={`/list/in-out?coldId=${props.id}`}>更多&gt;</Link>
                  </div>
                ),
                toolBarRender: false,
                search: false,
                columns: [
                  {
                    title: '进出类型',
                    dataIndex: 'type',
                    valueEnum: {
                      1: '出库',
                      2: '入库',
                    },
                  },
                  {
                    title: '进出时间',
                    dataIndex: 'operateDate',
                  },
                  {
                    title: '品种',
                    dataIndex: 'storageType',
                  },
                  {
                    title: '重量(kg)',
                    dataIndex: 'weight',
                    render: (text) => toFix(text, 2),
                  },
                ],
              }}
              fetchList={fetchDetailsInOutList}
              otherParams={{ coldIds: ['16383'] }}
            />
          ),
        },
      ],
    },
    {
      title: '监管责任表',
      list: [
        {
          type: 'title-2',
          label: '冷库责任人',
        },
        {
          label: '姓名',
          value: hideSensitive(props.contact),
        },
        {
          label: '职务',
          value: props.contactPosition,
        },
        {
          label: '联系方式',
          value: hideSensitive(props.contactTel, 3),
          domType: 'tel',
        },
        {
          type: 'empty',
        },
        {
          type: 'title-2',
          label: '监管责任人',
        },
        {
          label: '姓名',
          value: props.supervisorName,
        },
        {
          label: '职务',
          value: props.supervisorPosition,
        },
        {
          label: '所在单位',
          value: props.supervisorCompany,
        },
        {
          label: '联系电话',
          value: props.supervisorTel,
          domType: 'tel',
        },
        {
          type: 'custom',
          component: (
            <>
              <div className="lk-table-header">
                <h4 className="lk-table-title">检查记录</h4>
              </div>
              <LkDetailsTable
                tableProps={{
                  // title: () => (
                  //   <div className="lk-table-header">
                  //     <h4 className="lk-table-title">检查记录</h4>
                  //   </div>
                  // ),
                  toolBarRender: false,
                  columns: [
                    {
                      title: '',
                      dataIndex: 'rangeDate',
                      valueType: 'dateRange',
                      hideInTable: true,
                      formItemProps: {
                        placeholder: ['开始时间', '结束时间'],
                      },
                    },
                    {
                      title: '时间',
                      dataIndex: 'finishdate',
                      hideInSearch: true,
                    },
                    {
                      title: '备案信息与实际情况相符',
                      dataIndex: 'recordflag',
                      width: 100,
                      hideInSearch: true,
                    },
                    {
                      title: '贮存进口冻肉或水产品',
                      dataIndex: 'meatwaterflag',
                      render: (text) => MEAT_WATERFLAG[text],
                      width: 100,
                      hideInSearch: true,
                    },
                    {
                      title: '库存更新',
                      dataIndex: 'recordUpdate',
                      hideInSearch: true,
                    },
                    {
                      title: '结论',
                      dataIndex: 'checkresult',
                      width: 100,
                      hideInSearch: true,
                    },
                  ],
                }}
                fetchList={fetchDetailsCheckList}
                otherParams={{ no: props.no }}
              />
            </>
          ),
        },
      ],
    },
  ];
};

const rendererItem = (item) => {
  let span = 1;
  let { label } = item;
  let children = item.value || '无';

  switch (item.type) {
    case 'title-2':
      span = 2;
      label = null;
      children = <h2 className="lk-details-title-2">{item.label}</h2>;
      break;

    case 'custom':
      span = 2;
      children = item.component;
      break;

    case 'empty':
      children = null;
      break;

    default:
      break;
  }

  return (
    <Descriptions.Item key={item.label} label={label} span={span}>
      {children}
    </Descriptions.Item>
  );
};

export default (props) =>
  items(props.rowData || {}).map((part) => (
    <>
      <Descriptions key={part.title} title={part.title} column={2}>
        {part.list.map((item) => rendererItem(item))}
      </Descriptions>
      <Divider />
    </>
  ));
