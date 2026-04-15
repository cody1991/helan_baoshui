import React from 'react';
import { Card, Typography, Divider, Table, Tag, Alert, Row, Col, Statistic } from 'antd';
import {
  CalculatorOutlined,
} from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const TaxCalculation = () => {
  const calcSteps = [
    { key: '1', step: '年度总工资（Bruto）', amount: '€70,000', note: '假设值，完整 12 个月' },
    { key: '2', step: '1-11月工资 × 30% 免税', amount: '-€19,250', note: '€64,167 × 30%' },
    { key: '3', step: '12月工资 × 20% 免税', amount: '-€1,167', note: '€5,833 × 20%' },
    { key: '4', step: '免税津贴合计', amount: '-€20,417', note: '' },
    { key: '5', step: '应税工资', amount: '€49,583', note: '' },
    { key: '6', step: 'Eigenwoningforfait（全年）', amount: '+€910', note: 'WOZ €260k × 0.35%' },
    { key: '7', step: '房贷利息抵扣（11 个月）', amount: '-€7,333', note: '€200k × 4% × 11/12' },
    { key: '8', step: '房产净影响', amount: '-€6,423', note: '利息抵扣远大于虚拟收入' },
    { key: '9', step: 'Box 1 应税总收入', amount: '≈€43,160', note: '' },
  ];

  const taxCalc = [
    { key: '1', step: '第一档税（€0 - €38,441 × 35.82%）', amount: '≈€13,770', note: '' },
    { key: '2', step: '第二档税（€38,441 - €43,160 × 37.48%）', amount: '≈€1,768', note: '' },
    { key: '3', step: 'Box 1 税额小计', amount: '≈€15,538', note: '' },
    { key: '4', step: 'Algemene heffingskorting（100%）', amount: '-€3,068', note: '完整年度，不再按比例' },
    { key: '5', step: 'Arbeidskorting（100%）', amount: '-€5,599', note: '完整年度' },
    { key: '6', step: '最终应缴税额', amount: '≈€6,871', note: '' },
    { key: '7', step: '已预扣税额（Loonheffing，假设）', amount: '≈€10,000', note: '雇主每月代扣' },
    { key: '8', step: '退税 / 补税', amount: '≈退税 €3,129', note: '' },
  ];

  const compareData = [
    { key: '1', item: '纳税天数', y2024: '275 天（部分年度）', y2025: '365 天（完整年度）' },
    { key: '2', item: '30% Ruling', y2024: '全年 30%', y2025: '11 月 30% + 1 月 20%' },
    { key: '3', item: '免税津贴', y2024: '≈€21,000（按实际月份）', y2025: '≈€20,417' },
    { key: '4', item: '房贷利息抵扣', y2024: '€0（未开始还贷）', y2025: '≈-€7,333（11 个月）' },
    { key: '5', item: 'Eigenwoningforfait', y2024: '+€74（1 个月）', y2025: '+€910（全年）' },
    { key: '6', item: '房产净影响', y2024: '+€74', y2025: '-€6,423（大幅减税！）' },
    { key: '7', item: 'Heffingskorting', y2024: '按 75.1% 比例', y2025: '100% 完整享受' },
    { key: '8', item: '预计退税', y2024: '≈€532', y2025: '≈€3,129' },
  ];

  const colColumns = [
    { title: '步骤', dataIndex: 'step', key: 'step' },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (text) => {
        if (text.includes('退税')) return <Text className="amount-green">{text}</Text>;
        if (text.startsWith('-')) return <Text style={{ color: '#52c41a' }}>{text}</Text>;
        if (text.startsWith('+')) return <Text style={{ color: '#e05206' }}>{text}</Text>;
        return <Text strong>{text}</Text>;
      },
    },
    { title: '备注', dataIndex: 'note', key: 'note', render: (text) => <Text type="secondary">{text}</Text> },
  ];

  return (
    <div id="tax-calculation">
      <Card
        className="section-card"
        title={
          <span>
            <CalculatorOutlined style={{ marginRight: 8, color: '#e05206' }} />
            税务计算示例（2025 税年）
            <span className="personal-tag">基于你的情况</span>
          </span>
        }
      >
        <Alert
          message="声明"
          description="以下计算基于假设数据（年薪 €70,000，WOZ €260,000，房贷 €200,000，利率 4%），仅作为参考示例。实际税额以 Belastingdienst 系统计算为准。"
          type="warning"
          showIcon
        />

        <Divider>Box 1 应税收入计算</Divider>

        <Table
          columns={colColumns}
          dataSource={calcSteps}
          pagination={false}
          bordered
          size="middle"
        />

        <Divider>税额计算</Divider>

        <Table
          columns={colColumns}
          dataSource={taxCalc}
          pagination={false}
          bordered
          size="middle"
        />

        <Row gutter={16} style={{ marginTop: 24 }}>
          <Col xs={24} sm={6}>
            <Card style={{ textAlign: 'center', background: '#f6ffed', borderColor: '#b7eb8f' }}>
              <Statistic
                title="30%/20% Ruling 节省"
                value={7313}
                prefix="€"
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card style={{ textAlign: 'center', background: '#e6f4ff', borderColor: '#91caff' }}>
              <Statistic
                title="税收抵免合计"
                value={8667}
                prefix="€"
                valueStyle={{ color: '#1677ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card style={{ textAlign: 'center', background: '#f0f5ff', borderColor: '#adc6ff' }}>
              <Statistic
                title="房产净减税"
                value={6423}
                prefix="€"
                valueStyle={{ color: '#2f54eb' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card style={{ textAlign: 'center', background: '#fff7e6', borderColor: '#ffd591' }}>
              <Statistic
                title="预计退税"
                value={3129}
                prefix="≈€"
                valueStyle={{ color: '#fa8c16' }}
              />
            </Card>
          </Col>
        </Row>

        <Divider>2024 vs 2025 年对比</Divider>

        <Table
          pagination={false}
          bordered
          size="small"
          columns={[
            { title: '项目', dataIndex: 'item', key: 'item' },
            { title: '2024 税年', dataIndex: 'y2024', key: 'y2024' },
            {
              title: '2025 税年',
              dataIndex: 'y2025',
              key: 'y2025',
              render: (text) => {
                if (text.includes('减税') || text.includes('退税')) return <Text className="amount-green">{text}</Text>;
                return <Text strong>{text}</Text>;
              },
            },
          ]}
          dataSource={compareData}
        />

        <div className="success-box" style={{ marginTop: 16 }}>
          <strong>结论：</strong>虽然 2025 年 30% Ruling 免税额略有下降（年末降为 20%），
          但房贷利息抵扣（约 -€7,333）和完整的 Heffingskorting 使得整体退税额<strong>大幅增加</strong>。
          预计退税从 2024 年的约 €532 提升至 2025 年的约 <Text className="amount-green">€3,129</Text>。
        </div>

        <Alert
          style={{ marginTop: 16 }}
          message="重要提醒"
          description={
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li>实际 Loonheffing（预扣税）金额取决于雇主的月度计算和 30%→20% 切换时点</li>
              <li>如果你选择「部分非居民纳税人」身份，Algemene heffingskorting 可能受限</li>
              <li>Box 3 税额未包含在上述计算中（如果你有超过免征额的荷兰资产）</li>
              <li><strong>建议：</strong>先在系统中填写，看自动计算结果是否与预估接近</li>
            </ul>
          }
          type="info"
        />
      </Card>
    </div>
  );
};

export default TaxCalculation;
