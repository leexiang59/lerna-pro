import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import wHelpers from 'w-helpers';
import { fetchList } from '@/services/list';
import LkDetails from './components/LkDetails';
import columns from './columns';
import styles from './list.less';

wHelpers.test();
export default (props) => {
  const tableRef = useRef();
  const detailsRef = useRef();
  const [detailsData, setDetailsData] = useState(null);

  // 查看详情
  const handleView = (text, record) => {
    setDetailsData(record);
    detailsRef.current.open();
  };

  // 获取表格数据
  const getList = async (params) => {
    const {
      current,
      areaStreet,
      no,
      name,
      entName,
      unifySocialCreditCode,
      permitNo,
      ...others
    } = params;
    const { data } = await fetchList({
      ...others,
      keyWord: no || name || entName || unifySocialCreditCode || permitNo,
      pageNum: current,
      areaCode: areaStreet ? areaStreet[0] : null,
      streetCode: areaStreet ? areaStreet[1] : null,
    });
    return {
      data: data?.list || [],
      total: data?.totalCount,
    };
  };

  // 设置列
  const setColumns = columns({
    handleView,
  });

  const { areaCode = null, streetCode = null } = props.location.query;
  const initialValues = { areaStreet: [areaCode, streetCode] };

  return (
    <div className={styles.lkList}>
      <PageContainer>
        <ProTable
          rowKey="id"
          actionRef={tableRef}
          request={getList}
          columns={setColumns}
          search={{ collapsed: false }}
          form={{ initialValues }}
          columnEmptyText="--"
        />
      </PageContainer>
      <LkDetails ref={detailsRef} rowData={detailsData} />
    </div>
  );
};
