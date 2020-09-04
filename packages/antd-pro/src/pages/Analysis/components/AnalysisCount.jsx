import React from 'react';
import { Row, Col, Statistic, Card } from 'antd';

export default (props) => {
  const list = [
    {
      title: '冷库数',
      name: 'coldStorageTotalNum',
      precision: 0,
    },
    {
      title: '企业数',
      name: 'entTotalNum',
      precision: 0,
    },
    {
      title: '库容量(m³)',
      name: 'allCapacityNum',
      precision: 2,
    },
    {
      title: '总库存(吨)',
      name: 'capacityTotalNum',
      precision: 2,
    },
  ];
  return (
    <Row gutter={[16, 16]}>
      {list.map((item) => (
        <Col key={item.name} span={6}>
          <Card>
            <Statistic
              title={item.title}
              value={props.data ? props.data[item.name] : ''}
              precision={item.precision}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
