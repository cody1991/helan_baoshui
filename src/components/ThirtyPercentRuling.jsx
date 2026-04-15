import React from 'react';
import { Card, Steps, Table, Alert, Tag, Typography, Divider, Row, Col } from 'antd';
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const ThirtyPercentRuling = () => {
  const exampleData = [
    { key: '1', item: '2025 年度总工资（Bruto salaris）', without30: '€70,000', with30: '€70,000' },
    { key: '2', item: '1-11月（30% 免税）: €64,167 × 30%', without30: '—', with30: '-€19,250' },
    { key: '3', item: '12月（20% 免税）: €5,833 × 20%', without30: '—', with30: '-€1,167' },
    { key: '4', item: '免税总额', without30: '—', with30: '-€20,417' },
    { key: '5', item: '应税收入', without30: '€70,000', with30: '€49,583' },
    { key: '6', item: '大约税额（简化）', without30: '≈€25,074', with30: '≈€17,761' },
    { key: '7', item: '节省税额', without30: '—', with30: '≈€7,313' },
  ];

  const exampleColumns = [
    { title: '项目', dataIndex: 'item', key: 'item' },
    {
      title: '无 30% Ruling',
      dataIndex: 'without30',
      key: 'without30',
      align: 'right',
    },
    {
      title: '有 30%/20% Ruling',
      dataIndex: 'with30',
      key: 'with30',
      align: 'right',
      render: (text) =>
        text.startsWith('≈€7') ? (
          <Text className="amount-green">{text}</Text>
        ) : (
          <Text strong>{text}</Text>
        ),
    },
  ];

  return (
    <div id="thirty-percent">
      <Card
        className="section-card"
        title={
          <span>
            <SafetyCertificateOutlined style={{ marginRight: 8, color: '#e05206' }} />
            30% Ruling 详解 — 2025 年过渡期
            <span className="personal-tag">你适用</span>
          </span>
        }
      >
        <Paragraph>
          <strong>30% Ruling（30%-regeling）</strong> 是荷兰为吸引高技能外籍员工提供的税收优惠。
          你于 2024.4 到达，适用 2024 年新规（阶梯递减），2025 年正好横跨 30% → 20% 的过渡。
        </Paragraph>

        <Alert
          message="2025 年你的 30% Ruling 关键变化"
          description={
            <div>
              <p>你于 2024 年 4 月到达荷兰，适用 2024 年起的新阶梯递减规则：</p>
              <ul style={{ paddingLeft: 20 }}>
                <li>前 20 个月（2024.4 - 2025.11）：<strong>30%</strong> 免税</li>
                <li>接下来 20 个月（2025.12 - 2027.7）：<strong>20%</strong> 免税</li>
                <li>最后 20 个月（2027.8 - 2029.3）：<strong>10%</strong> 免税</li>
              </ul>
              <p style={{ marginTop: 8 }}>
                <strong>因此 2025 税年：</strong>1-11 月享受 30%，12 月降为 20%。
                报税时需要分段计算免税额。
              </p>
            </div>
          }
          type="warning"
          showIcon
        />

        <Divider>你的 30% Ruling 时间表</Divider>

        <Steps
          direction="vertical"
          current={1}
          items={[
            {
              title: '第一阶段：30% 免税',
              description: '2024.4 — 2025.11（前 20 个月）← 2025 年大部分时间在此',
              status: 'finish',
              icon: <Tag color="green">30%</Tag>,
            },
            {
              title: '第二阶段：20% 免税',
              description: '2025.12 — 2027.7（中间 20 个月）← 2025.12 起进入',
              status: 'process',
              icon: <Tag color="blue">20%</Tag>,
            },
            {
              title: '第三阶段：10% 免税',
              description: '2027.8 — 2029.3（最后 20 个月）',
              status: 'wait',
              icon: <Tag color="orange">10%</Tag>,
            },
          ]}
        />

        <div className="highlight-box" style={{ marginTop: 16 }}>
          <strong>报税实操提示：</strong>在 Belastingdienst 系统中，雇主的 Jaaropgaaf 会标明
          你全年的应税工资和免税津贴金额。如果雇主正确执行了 30%→20% 的过渡，
          Jaaropgaaf 上会显示正确的总免税额。你在报税时需确认这个数字是否正确。
          如果有疑问，可参考每月工资单（Loonstrook）逐月核对。
        </div>

        <Divider>节税示例（假设年薪 €70,000，2025 税年）</Divider>

        <Table
          columns={exampleColumns}
          dataSource={exampleData}
          pagination={false}
          bordered
          size="middle"
        />

        <Divider>30% Ruling 的附加福利（2025 年仍有效）</Divider>

        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="Box 3 海外资产免税">
              <Paragraph>
                选择「部分非居民纳税人」身份后，海外银行存款、投资、房产等
                <strong>不需要在荷兰缴税</strong>。
              </Paragraph>
              <div className="success-box">
                <strong>操作提示：</strong>报税时在 Box 3 部分勾选
                「Keuze partieel buitenlandse belastingplicht」。
                2024 年你的税务顾问应该已经帮你选了，2025 年自己报税时<strong>记得也要勾选</strong>。
              </div>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="Box 2 海外持股免税">
              <Paragraph>
                如果你在中国有公司持股（≥5%），选择部分非居民身份后
                <strong>不需要在荷兰申报 Box 2</strong>。
              </Paragraph>
              <Tag color="blue">视情况</Tag>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="免换荷兰驾照">
              <Paragraph>
                在 30% Ruling 有效期内，可以继续使用中国驾照在荷兰开车
                （但仍建议尽早换照）。
              </Paragraph>
              <Tag color="orange">实用福利</Tag>
            </Card>
          </Col>
        </Row>

        <div className="danger-box" style={{ marginTop: 16 }}>
          <strong>注意：30% Ruling 与房贷利息抵扣的关系</strong>
          <p style={{ marginTop: 8 }}>
            选择「部分非居民纳税人」身份时，房贷利息抵扣需要满足 <strong>90% 规则</strong>
            （全球收入的 90% 以上来自荷兰）。作为 KM 在荷兰全职工作，你通常满足此条件。
            如果你在中国还有其他收入来源（如房租、投资等），需要计算是否仍满足 90%。
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ThirtyPercentRuling;
