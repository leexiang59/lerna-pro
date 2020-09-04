import React from 'react';
import ProTable from '@ant-design/pro-table';

export default class LkDetailsTable extends React.Component {
  ref = React.createRef();

  // 获取表格数据
  getList = async (params) => {
    const { current = 1, rangeDate, ...others } = params;
    const { data } = await this.props.fetchList({
      ...others,
      pageNum: current,
      pageSize: 10,
      startTime: rangeDate ? rangeDate[0].split(' ')[0] : undefined,
      endTime: rangeDate ? rangeDate[1].split(' ')[0] : undefined,
      ...this.props.otherParams,
    });
    return {
      data: data?.list || data || [],
      total: data?.totalCount,
    };
  };

  render() {
    return (
      <ProTable
        rowKey="id"
        className="lk-details-table"
        actionRef={this.ref}
        request={this.getList}
        search={this.props.search}
        columnEmptyText="--"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: false,
        }}
        {...this.props.tableProps}
      />
    );
  }
}
