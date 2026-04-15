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
    { key: '4', item: '2025 年可抵扣月份', value: '11 个月（2025.2 - 2025.12）' },
    { key: '5', item: '2025 年可抵扣利息合计', value: '≈€7,333' },
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
    {
      key: '3',
      label: '「地址租给别人」的具体税务处理',
      children: (
        <div>
          <Alert
            message="这是你情况中最需要注意的部分"
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
          <Title level={5}>情况一：出租部分房间（实际有人住）</Title>
          <Paragraph>
            如果你将 50 平方米中的部分（比如一间卧室）出租给他人实际居住：
          </Paragraph>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <strong>「kamerverhuurvrijstelling（房间出租免税额）」：</strong>
              2025 年，如果出租房间的年租金不超过约 <Text className="amount">€5,881</Text>（以税务局最终公布为准），则租金收入完全免税
            </li>
            <li>你必须是自住（Hoofdbewoner）</li>
            <li>超过免税额的部分，属于 Box 1 收入</li>
          </ul>

          <Divider />

          <Title level={5}>情况二：只出租地址注册（BRP registratie）</Title>
          <Paragraph>
            如果只是让别人注册地址但不实际居住在你的房子里：
          </Paragraph>
          <div className="danger-box">
            <p><WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
              <strong>严重警告：</strong>这在荷兰属于地址欺诈（Adresfraude），是违法行为。</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>市政府（Gemeente）可处以罚款</li>
              <li>可能影响你的居留许可</li>
              <li>如果对方利用你的地址骗取福利，你可能承担连带责任</li>
              <li><strong>强烈建议不要这样做</strong></li>
            </ul>
          </div>

          <Divider />

          <Title level={5}>情况三：合法出租部分并收取租金</Title>
          <Paragraph>如果在合理范围内出租房屋的一部分：</Paragraph>
          <ul style={{ paddingLeft: 20 }}>
            <li>房贷利息抵扣 <strong>不受影响</strong>（只要你仍以此为主要住所）</li>
            <li>Eigenwoningforfait 按全额计算</li>
            <li>租金收入在免税额内不需额外缴税</li>
          </ul>
          <div className="highlight-box" style={{ marginTop: 12 }}>
            <strong>2025 年报税操作：</strong>在 Box 1「Eigen woning」部分，有一项
            「Kamerverhuurvrijstelling」，如果你的租金收入在免税额内，在这里选「是」即可。
            如果你 2024 年的税务顾问也这样处理了，保持一致即可。
          </div>
        </div>
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
            <span className="personal-tag">完整年度 + 11 个月房贷</span>
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
                <li>房贷利息抵扣：<strong>11 个月</strong>（2025.2 - 12），2024 年为 0</li>
                <li>净效果：房贷利息抵扣远大于 Eigenwoningforfait，<strong>整体大幅减税</strong></li>
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
          自住房的房贷利息可以在 <strong>Box 1</strong> 中抵扣。2025 年你有 11 个月的利息可以抵扣，
          这将是你最大的税收减免项之一。
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
          房贷利息抵扣: <span className="amount-green">-€7,333</span>（11 个月利息）
          <br />
          <strong>净影响: <span className="amount-green">-€6,423</span></strong>（减少应税收入，显著减税！）
        </div>

        <Divider>数字概览</Divider>

        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="年利息支出（11 个月）"
                value={7333}
                prefix="€"
                valueStyle={{ color: '#e05206' }}
              />
              <div style={{ color: '#999', fontSize: 12 }}>假设贷款 €200k, 利率 4%</div>
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
                value={6423}
                prefix="-€"
                valueStyle={{ color: '#52c41a' }}
              />
              <div style={{ color: '#999', fontSize: 12 }}>减少应税收入</div>
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
