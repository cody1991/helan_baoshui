import React from 'react';
import { Card, Table, Tag, Collapse, Typography, Divider, Alert } from 'antd';
import {
  BankOutlined,
} from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const TaxOverview = () => {
  const boxColumns = [
    {
      title: 'Box',
      dataIndex: 'box',
      key: 'box',
      width: 100,
      render: (text, record) => <Tag color={record.color}>{text}</Tag>,
    },
    { title: '名称', dataIndex: 'name', key: 'name', width: 200 },
    { title: '包含内容', dataIndex: 'content', key: 'content' },
    {
      title: '税率（2025）',
      dataIndex: 'rate',
      key: 'rate',
      width: 200,
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: '与你的关系',
      dataIndex: 'relevance',
      key: 'relevance',
      render: (text) => <span className="personal-tag">{text}</span>,
    },
  ];

  const boxData = [
    {
      key: '1',
      box: 'Box 1',
      name: '工作与住房收入',
      content: '工资收入、自住房收益/抵扣（Eigenwoningforfait + 房贷利息抵扣）、租金收入',
      rate: '35.82% / 49.50%',
      color: 'blue',
      relevance: '主要相关',
    },
    {
      key: '2',
      box: 'Box 2',
      name: '实质性持股收入',
      content: '持有公司 ≥5% 股份的分红和资本利得',
      rate: '24.5% / 33%',
      color: 'green',
      relevance: '通常不涉及',
    },
    {
      key: '3',
      box: 'Box 3',
      name: '储蓄与投资',
      content: '银行存款、股票投资、非自住房产等资产',
      rate: '36%（虚拟收益率征税）',
      color: 'purple',
      relevance: '可能涉及',
    },
  ];

  const bracket2025 = [
    {
      key: '1',
      range: '€0 - €38,441',
      rate: '35.82%',
      desc: '含社保费，适用于大部分人第一档',
    },
    {
      key: '2',
      range: '€38,441 - €76,817',
      rate: '37.48%',
      desc: '中间税档',
    },
    {
      key: '3',
      range: '€76,817 以上',
      rate: '49.50%',
      desc: '最高边际税率',
    },
  ];

  const bracketColumns = [
    { title: '收入区间', dataIndex: 'range', key: 'range' },
    {
      title: '税率',
      dataIndex: 'rate',
      key: 'rate',
      render: (text) => <Text strong style={{ color: '#e05206' }}>{text}</Text>,
    },
    { title: '说明', dataIndex: 'desc', key: 'desc' },
  ];

  const collapseItems = [
    {
      key: '1',
      label: 'Box 3 虚拟收益率（Forfaitair rendement）2025 年详解',
      children: (
        <div>
          <Paragraph>
            荷兰 Box 3 不对实际资本利得征税，而是假设你的资产产生了一定比例的虚拟收益，然后对虚拟收益征收 <strong>36%</strong> 的税。
          </Paragraph>
          <Alert
            message="2025 年虚拟收益率（预计值，最终确认在 2026 年 3 月前公布）"
            description={
              <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li>银行存款（Spaargeld）：约 <strong>1.44%</strong>（根据平均存款利率）</li>
                <li>其他投资（Beleggingen）：约 <strong>6.04%</strong></li>
                <li>债务（Schulden）：约 <strong>2.47%</strong></li>
              </ul>
            }
            type="info"
          />
          <Paragraph style={{ marginTop: 12 }}>
            <strong>免征额（Heffingsvrij vermogen）：</strong>2025 年为 <Text className="amount">€57,684</Text>/人。
            净资产超过此额度的部分才需要缴纳 Box 3 税。
          </Paragraph>
          <div className="highlight-box">
            <strong>与你相关：</strong>你有 30% Ruling，可以选择「部分非居民纳税人（partieel buitenlands belastingplichtige）」身份，
            则 Box 2 和 Box 3 只需对荷兰境内资产纳税，<strong>海外存款和投资完全免税</strong>！
            2024 年的税务顾问是否帮你勾选了这个选项？2025 年你需要自己确认勾选。
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: '2025 年 vs 2024 年：税率变化对比',
      children: (
        <div>
          <Paragraph>
            2025 年荷兰税制有几个重要变化：
          </Paragraph>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '项目', dataIndex: 'item', key: 'item' },
              { title: '2024 年', dataIndex: 'y2024', key: 'y2024' },
              { title: '2025 年', dataIndex: 'y2025', key: 'y2025' },
            ]}
            dataSource={[
              { key: '1', item: 'Box 1 第一档', y2024: '36.97%（€0-€75,518）', y2025: '35.82%（€0-€38,441）' },
              { key: '2', item: 'Box 1 第二档', y2024: '49.50%（€75,518+）', y2025: '37.48%（€38,441-€76,817）' },
              { key: '3', item: 'Box 1 第三档', y2024: '—', y2025: '49.50%（€76,817+）' },
              { key: '4', item: 'Box 3 免征额', y2024: '€57,000', y2025: '€57,684' },
              { key: '5', item: 'Algemene heffingskorting', y2024: '最高 €3,362', y2025: '最高 €3,068' },
              { key: '6', item: 'Arbeidskorting', y2024: '最高 €5,532', y2025: '最高 €5,599' },
              { key: '7', item: 'Eigenwoningforfait（€75k-€1.2M）', y2024: '0.35%', y2025: '0.35%' },
            ]}
          />
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>对你的影响：</strong>2025 年 Box 1 改为三档税率，低收入档税率降低。
            同时 Algemene heffingskorting 略有下降，但 Arbeidskorting 略有上升。
            2025 年是完整年度，不再按比例折算，抵免额度更完整。
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="tax-overview">
      <Card
        className="section-card"
        title={
          <span>
            <BankOutlined style={{ marginRight: 8, color: '#e05206' }} />
            荷兰税制总览 - Box 系统（2025 年）
          </span>
        }
      >
        <Paragraph>
          荷兰个人所得税（Inkomstenbelasting）采用独特的 <strong>「三个 Box」</strong> 制度，
          不同类型的收入放入不同的 Box，分别计税。这与中国的综合所得税制有本质区别。
        </Paragraph>

        <Table
          columns={boxColumns}
          dataSource={boxData}
          pagination={false}
          bordered
          size="middle"
          style={{ marginBottom: 24 }}
        />

        <Divider>2025 年 Box 1 阶梯税率</Divider>

        <Table
          columns={bracketColumns}
          dataSource={bracket2025}
          pagination={false}
          bordered
          size="small"
          style={{ marginBottom: 24 }}
        />

        <div className="info-box">
          <strong>注意：</strong>第一档 35.82% 中包含了 AOW 养老金保险费（17.9%）和其他社会保险费。
          如果你有 30% Ruling，免税部分不计入社保基数，实际有效税率更低。
          2025 年从两档变为三档，中间新增了 37.48% 的税档。
        </div>

        <Collapse items={collapseItems} style={{ marginTop: 16 }} />
      </Card>
    </div>
  );
};

export default TaxOverview;
