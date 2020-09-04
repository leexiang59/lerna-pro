import React from 'react';
import { Tabs } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { fetchDetailsInOutList } from '@/services/list';
// import { getSearchParams } from '@/utils/utils';
import columnsIn from './columnsIn';
import columnsOut from './columnsOut';

const { TabPane } = Tabs;
// const { coldId } = getSearchParams();

export default (props) => {
  const { coldId } = props.location.query;

  // 获取表格数据
  const getList = async (params) => {
    const { current, operateDateForamt, ...others } = params;
    const { data } = await fetchDetailsInOutList({
      coldIds: [coldId],
      pageNum: current,
      operateDateFrom: operateDateForamt ? operateDateForamt[0].split(' ')[0] : undefined,
      operateDateTo: operateDateForamt ? operateDateForamt[1].split(' ')[0] : undefined,
      ...others,
    });
    return {
      data: data?.list || [],
    };
  };

  const tableConfig = {
    rowKey: 'recordBatchNo',
    search: { collapsed: false },
    scroll: { x: 1800 },
  };

  return (
    <div>
      <PageContainer>
        <Tabs defaultActiveKey="1">
          <TabPane tab="入库明细" key="1">
            <ProTable
              {...tableConfig}
              request={(params) => getList({ ...params, type: '2' })}
              columns={columnsIn()}
            />
          </TabPane>

          <TabPane tab="出库明细" key="2">
            <ProTable
              {...tableConfig}
              request={(params) => getList({ ...params, type: '1' })}
              columns={columnsOut()}
              scroll={{ x: 1300 }}
            />
          </TabPane>
        </Tabs>
      </PageContainer>
    </div>
  );
};
