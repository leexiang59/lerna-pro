import React from 'react';
import { Card } from 'antd';
import { Chart, Interval, Tooltip, Axis, Coordinate, Legend, Interaction } from 'bizcharts';
import { toFix } from '@/utils/utils';

const color = [
  '#1890FF',
  '#23C2C2',
  '#7899FE',
  '#3FC25B',
  '#F04064',
  '#EACC14',
  '#604300',
  '#8543E0',
  '#FA6400',
  '#F7B500',
  '#2DDFFF',
];
export default (props) => {
  if (!props.data) return null;

  const data = [];
  props.data.forEach((item, index) => {
    const proportion = item.proportion * 100;
    const legendText = `${item.areaName}，${toFix(item.capacityNum, 2)}`;
    data.push({
      id: item.areaCode,
      name: legendText,
      value: legendText,
      item: legendText,
      percent: proportion,
      areaName: item.areaName,
      marker: {
        symbol: 'circle',
        style: {
          r: 4.5,
          fill: color[index],
        },
      },
    });
  });

  return (
    <Card title="库存分布">
      <Chart
        className="lk-analysis-chart"
        height={400}
        data={data}
        autoFit
        onIntervalClick={(e) => {
          props.handleLinkToListPage(e.data.data.id);
        }}
      >
        <Coordinate type="theta" radius={0.75} />
        <Tooltip showTitle={false} />
        <Legend
          name="item"
          position="right"
          offsetX={-30}
          custom
          items={data}
          onChange={(e) => {
            props.handleLinkToListPage(e.item.id);
          }}
        />
        <Axis visible={false} />
        <Interaction type="element-single-selected" />
        <Interval
          position="percent"
          adjust="stack"
          color="item"
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          label={[
            '*',
            {
              content: (row) => {
                return `${row.areaName}: ${toFix(row.percent, 2)}%`;
              },
            },
          ]}
        />
      </Chart>
    </Card>
  );
};
