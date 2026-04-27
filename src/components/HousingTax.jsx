import React from 'react';
import { Card, Alert, Typography, Divider, Table, Tag, Collapse, Row, Col, Statistic } from 'antd';
import {
  HomeOutlined,
  WarningOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';

const { Paragraph, Text, Title } = Typography;

const HousingTax = () => {
  const wozExample = [
    { key: '1', item: 'WOZ 值（假设，基准日 2025.1.1）', value: '€260,000' },
    { key: '2', item: 'Eigenwoningforfait 比例（2025）', value: '0.35%' },
    { key: '3', item: 'Eigenwoningforfait 金额（全年）', value: '€910/年' },
  ];

  const mortgageExample = [
    { key: '1', item: '房贷总额（假设）', value: '€200,000' },
    { key: '2', item: 'ING 利率（假设）', value: '4.0%' },
    { key: '3', item: '月供中利息部分（初期近似）', value: '≈€667/月' },
    { key: '4', item: '2025 年可抵扣范围', value: '2025 年实际已支付的房贷利息' },
    { key: '5', item: '2025 年可抵扣利息合计', value: '以 ING Jaaroverzicht 2025 为准（示例约 €8,000）' },
  ];

  const colColumns = [
    { title: '项目', dataIndex: 'item', key: 'item' },
    {
      title: '金额/值',
      dataIndex: 'value',
      key: 'value',
      align: 'right',
      render: (text) => <Text strong>{text}</Text>,
    },
  ];

  const collapseItems = [
    {
      key: '1',
      label: 'WOZ 值是什么？怎么查？',
      children: (
        <div>
          <Paragraph>
            <strong>WOZ（Wet Waardering Onroerende Zaken）</strong>是市政府每年 1 月 1 日对房产评估的市场价值。
          </Paragraph>
          <ul style={{ paddingLeft: 20 }}>
            <li>每年 2 月左右收到 WOZ-beschikking（评估通知），2025 税年用的是 2025.1.1 基准日的 WOZ</li>
            <li>在 <a href="https://www.wozwaardeloket.nl" target="_blank" rel="noopener">WOZ Waardeloket</a> 可免费查询</li>
            <li>WOZ 值影响：Eigenwoningforfait（Box 1）、OZB 地税、水利税等</li>
            <li>如果认为 WOZ 值过高，可在收到通知后 6 周内提出异议（bezwaar）</li>
          </ul>
          <div className="highlight-box">
            <strong>操作提示：</strong>你应该已在 2026 年 2 月左右收到了 2026 年的 WOZ-beschikking（基准日 2026.1.1），
            但报 2025 税年时，要用的是 <strong>2025 年的 WOZ-beschikking（基准日 2025.1.1）</strong>。
            查看你去年收到的那封即可。
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Eigenwoningforfait 比例速查表（2025）',
      children: (
        <Table
          pagination={false}
          bordered
          size="small"
          columns={[
            { title: 'WOZ 值区间', dataIndex: 'range', key: 'range' },
            { title: '比例', dataIndex: 'rate', key: 'rate' },
          ]}
          dataSource={[
            { key: '1', range: '€0 - €12,500', rate: '0%' },
            { key: '2', range: '€12,500 - €25,000', rate: '0.10%' },
            { key: '3', range: '€25,000 - €50,000', rate: '0.15%' },
            { key: '4', range: '€50,000 - €75,000', rate: '0.20%' },
            { key: '5', range: '€75,000 - €1,200,000', rate: '0.35%' },
            { key: '6', range: '超过 €1,200,000', rate: '2.35%' },
          ]}
        />
      ),
    },
  ];

  return (
    <div id="housing-tax">
      <Card
        className="section-card"
        title={
          <span>
            <HomeOutlined style={{ marginRight: 8, color: '#e05206' }} />
            房产相关税务（2025 税年）
            <span className="personal-tag">完整年度 + 实际房贷利息</span>
          </span>
        }
      >
        <Alert
          message="2025 年房产税务亮点"
          description={
            <div>
              <p>2025 年是你持有房产的<strong>第一个完整年度</strong>，也是房贷利息抵扣的重要一年：</p>
              <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li>Eigenwoningforfait：<strong>全年 12 个月</strong>（2024 年只算了 1 个月）</li>
                <li>房贷利息抵扣：以 <strong>ING Jaaroverzicht 2025</strong> 上的实际已付利息为准，首期可能包含前期结算利息</li>
                <li>净效果：房贷利息抵扣通常远大于 Eigenwoningforfait，<strong>整体大幅减税</strong></li>
              </ul>
            </div>
          }
          type="success"
          showIcon
        />

        <Divider>Eigenwoningforfait（自住房虚拟收入）</Divider>

        <Paragraph>
          荷兰税法假设你从自住房中获得了「虚拟收入」，称为 <strong>Eigenwoningforfait</strong>。
          这个金额会被加到你的 Box 1 收入中。但它远小于房贷利息抵扣，总体效果仍是减税。
        </Paragraph>

        <Table
          columns={colColumns}
          dataSource={wozExample}
          pagination={false}
          bordered
          size="middle"
          style={{ marginBottom: 24 }}
        />

        <Divider>房贷利息抵扣（Hypotheekrenteaftrek）</Divider>

        <Paragraph>
          自住房的房贷利息可以在 <strong>Box 1</strong> 中抵扣。你是 2024.12 购房、2025.2 开始还款，
          因此首期还款可能包含购房后到首次扣款前的结算利息；2025 年抵扣额应以 <strong>ING Jaaroverzicht 2025</strong> 的实际已付利息总额为准。
        </Paragraph>

        <Table
          columns={colColumns}
          dataSource={mortgageExample}
          pagination={false}
          bordered
          size="middle"
        />

        <div className="success-box" style={{ marginTop: 16 }}>
          <CalculatorOutlined style={{ marginRight: 8 }} />
          <strong>2025 年你的房产对 Box 1 净影响：</strong>
          <br />
          Eigenwoningforfait: +€910（虚拟收入）
          <br />
          房贷利息抵扣: <span className="amount-green">按 ING 年度报告实际金额</span>（示例约 €8,000）
          <br />
          <strong>净影响: <span className="amount-green">约 -€7,090</span></strong>（以实际利息为准，减少应税收入）
        </div>

        <Divider>数字概览</Divider>

        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="年利息支出（实际）"
                value={8000}
                prefix="≈€"
                valueStyle={{ color: '#e05206' }}
              />
              <div style={{ color: '#999', fontSize: 12 }}>示例值；报税用 ING Jaaroverzicht</div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Eigenwoningforfait"
                value={910}
                prefix="€"
                valueStyle={{ color: '#999' }}
              />
              <div style={{ color: '#999', fontSize: 12 }}>假设 WOZ €260k</div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="净抵扣效果"
                value={7090}
                prefix="≈-€"
                valueStyle={{ color: '#52c41a' }}
              />
              <div style={{ color: '#999', fontSize: 12 }}>按示例利息 €8,000 估算</div>
            </Card>
          </Col>
        </Row>

        <Alert
          style={{ marginTop: 16 }}
          message="房贷利息抵扣条件提醒"
          description={
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li>房贷必须是用于购买、改善或维护<strong>自住房（Eigen Woning）</strong></li>
              <li>必须是<strong>年金房贷（Annuïteitenhypotheek）</strong>或<strong>线性房贷（Lineaire hypotheek）</strong></li>
              <li>必须在 30 年内还清</li>
              <li>房子必须是你的<strong>主要住所（Hoofdverblijf）</strong></li>
              <li><strong>操作提示：</strong>ING 银行会提供年度报告（Jaaroverzicht hypotheek），上面有全年利息总额，直接填入报税系统</li>
            </ul>
          }
          type="info"
        />

        <Divider>其他房产相关税费（年度）</Divider>

        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card type="inner" title="地方税（OZB）" size="small">
              <Paragraph>
                每年由市政府征收，基于 WOZ 值：
              </Paragraph>
              <ul style={{ paddingLeft: 20 }}>
                <li>房主部分（Eigenaar）：WOZ × ~0.04-0.1%</li>
                <li>使用者部分（Gebruiker）：WOZ × ~0.03-0.08%</li>
              </ul>
              <Tag color="orange">每年约 €200-500</Tag>
              <div style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
                注意：OZB 不在个人所得税中，而是市政府单独收取
              </div>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="水利税（Waterschapsbelasting）" size="small">
              <Paragraph>
                每年缴纳给水利委员会：
              </Paragraph>
              <ul style={{ paddingLeft: 20 }}>
                <li>用于防洪、水质管理</li>
                <li>包含固定部分和 WOZ 相关部分</li>
              </ul>
              <Tag color="cyan">每年约 €200-400</Tag>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="垃圾税（Afvalstoffenheffing）" size="small">
              <Paragraph>
                市政府征收的垃圾处理费：
              </Paragraph>
              <ul style={{ paddingLeft: 20 }}>
                <li>金额因城市而异</li>
                <li>单人户通常费用较低</li>
              </ul>
              <Tag color="default">每年约 €100-400</Tag>
            </Card>
          </Col>
        </Row>

        <Collapse items={collapseItems} style={{ marginTop: 24 }} />
      </Card>
    </div>
  );
};

export default HousingTax;
