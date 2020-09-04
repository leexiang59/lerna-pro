import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { fetchAnalysis } from '@/services/analysis';
import AnalysisCount from './components/AnalysisCount';
import AnalysisChart from './components/AnalysisChart';
import AnalysisTable from './components/AnalysisTable';
import styles from './list.less';

const coldStorageType = [
  { label: '全部', value: 'all', id: 'all' },
  { label: '冷冻库', value: 'A', id: 'A' },
  { label: '冷藏库', value: 'B', id: 'B' },
  { label: '综合库', value: 'C', id: 'C' },
];

export default (props) => {
  const [analysisData, setAnalysisData] = useState({});

  // 获取统计数据
  const getAnalysis = async (params) => {
    const { data } = await fetchAnalysis(params);
    setAnalysisData(data);
  };

  // 类型切换
  const handleChange = (value) => {
    getAnalysis({
      coldStorageType: value === 'all' ? null : value,
    });
  };

  // 携带地区编码跳转到列表页
  const handleLinkToListPage = (areaCode) => {
    const { userInfo } = props;
    let search = `areaCode=${areaCode}`;
    if (userInfo?.roleType === 2) {
      search = `areaCode=${userInfo.departmentCode}&streetCode=${areaCode}`;
    }
    props.history.push(`/list?${search}`);
  };

  useEffect(() => {
    getAnalysis();
  }, []);

  return (
    <div className={styles.lkAnalysis}>
      <PageContainer>
        {/* 条件筛选 */}
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card>
              冷库类型：
              <Select
                style={{ width: 200 }}
                options={coldStorageType}
                defaultValue="all"
                onChange={handleChange}
              />
            </Card>
          </Col>
        </Row>

        {/* 数量总览 */}
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <AnalysisCount {...props} data={analysisData} />
          </Col>
        </Row>

        {/* 库存、统计 */}
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <AnalysisChart
              {...props}
              data={analysisData?.statisticList}
              handleLinkToListPage={handleLinkToListPage}
            />
          </Col>
          <Col span={12}>
            <AnalysisTable
              {...props}
              data={analysisData?.statisticList}
              handleLinkToListPage={handleLinkToListPage}
            />
          </Col>
        </Row>

        {/* 进出库统计 */}
        {/* <Row gutter={[16, 16]}>
          <Col span={8}>1</Col>
          <Col span={8}>2</Col>
          <Col span={8}>3</Col>
        </Row> */}
      </PageContainer>
    </div>
  );
};
