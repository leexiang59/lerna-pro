import React from 'react';
import { Card } from 'antd';
import ProTable from '@ant-design/pro-table';
import { toFix } from '@/utils/utils';

export default (props) => {
  const columns = [
    {
      title: '区域',
      dataIndex: 'areaName',
    },
    {
      title: '冷库数',
      dataIndex: 'coldStorageNum',
    },
    {
      title: '企业数',
      dataIndex: 'entNum',
    },
    {
      title: '库容量(m³)',
      dataIndex: 'allCapacityNum',
      render: (text) => toFix(text, 2),
    },
    {
      title: '库存量(吨)',
      dataIndex: 'capacityNum',
      render: (text) => toFix(text, 2),
    },
  ];
  return (
    <Card title="统计信息">
      <ProTable
        rowKey="areaCode"
        columns={columns}
        dataSource={props.data}
        search={false}
        toolBarRender={false}
        pagination={false}
        onRow={(row) => ({
          onClick: () => {
            props.handleLinkToListPage(row.areaCode);
          },
        })}
      />
    </Card>
  );
};
