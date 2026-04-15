import React from 'react';
import { Card, Typography, Row, Col, Tag, Alert, Timeline, Divider } from 'antd';
import {
  BulbOutlined,
  LinkOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const { Paragraph, Text, Title } = Typography;

const TipsAndResources = () => {
  return (
    <div id="tips-resources">
      <Card
        className="section-card"
        title={
          <span>
            <BulbOutlined style={{ marginRight: 8, color: '#e05206' }} />
            实用建议与重要资源
          </span>
        }
      >
        <Title level={5}>
          <ExclamationCircleOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
          2025 税年自行报税 — 优先级建议
        </Title>

        <Timeline
          items={[
            {
              color: 'red',
              children: (
                <div>
                  <h4>1. 时间紧迫 — 截止日 2026.5.1</h4>
                  <p>
                    你现在正处于报税季末尾。如果来不及，<strong>务必在 5 月 1 日前申请延期</strong>
                    （在 Belastingdienst 网站 → Uitstel aanvragen），可延至 2026.9.1。
                  </p>
                </div>
              ),
            },
            {
              color: 'orange',
              children: (
                <div>
                  <h4>2. 找到 2024 年的报税副本</h4>
                  <p>
                    联系你之前的税务顾问索取 2024 年申报副本，或在 Mijn Belastingdienst 查看。
                    这是你最好的参照模板，按照去年的格式填写可以避免遗漏。
                  </p>
                </div>
              ),
            },
            {
              color: 'orange',
              children: (
                <div>
                  <h4>3. 核对 Jaaropgaaf 中的 30%→20% 过渡</h4>
                  <p>
                    确认雇主的 Jaaropgaaf 正确反映了 2025 年的免税津贴分段
                    （1-11 月 30%、12 月 20%）。如有不符，联系雇主 HR 更正。
                  </p>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <h4>4. 准备 ING 房贷年度报告</h4>
                  <p>
                    登录 ING App 下载 2025 年 Jaaroverzicht hypotheek。上面有全年利息总额，
                    直接填入报税系统的自住房部分。
                  </p>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <h4>5. 确认 Box 3 资产余额</h4>
                  <p>
                    准备 2025.1.1 的银行余额。如果选择部分非居民身份，只需荷兰银行余额。
                    检查是否超过免征额 €57,684。
                  </p>
                </div>
              ),
            },
            {
              color: 'green',
              children: (
                <div>
                  <h4>6. 厘清地址出租的税务处理</h4>
                  <p>
                    如果你收取了租金且在免税额内（€5,881），在报税系统中选择 Kamerverhuurvrijstelling。
                    和 2024 年保持一致处理方式。
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Divider>自行报税检查清单 (Checklist)</Divider>

        <div style={{ background: '#fafafa', borderRadius: 8, padding: 20, border: '1px solid #e8e8e8' }}>
          {[
            { text: '登录 Mijn Belastingdienst，查看 2024 年申报内容', done: false },
            { text: '收集 Jaaropgaaf 2025，核对 30%→20% 免税额', done: false },
            { text: '下载 ING 房贷年度报告（利息总额）', done: false },
            { text: '确认 WOZ 值（2025.1.1 基准日）', done: false },
            { text: '准备银行余额（2025.1.1）', done: false },
            { text: '确认租金收入金额和处理方式', done: false },
            { text: '开始填写 Aangifte 2025', done: false },
            { text: 'Box 1：确认工资和 30% Ruling', done: false },
            { text: 'Box 1：填写自住房（WOZ + 房贷利息）', done: false },
            { text: '勾选「部分非居民纳税人」', done: false },
            { text: 'Box 3：填写荷兰境内资产', done: false },
            { text: '确认计算结果，检查退税金额是否合理', done: false },
            { text: '提交申报', done: false },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 14 }}>
              <span style={{ display: 'inline-block', width: 24, textAlign: 'center', color: '#d9d9d9' }}>☐</span>
              {item.text}
            </div>
          ))}
        </div>

        <Divider>有用的网站和工具</Divider>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="官方网站">
              <ul style={{ paddingLeft: 16, lineHeight: 2.5 }}>
                <li>
                  <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener">
                    <LinkOutlined /> Belastingdienst
                  </a>
                  <br />
                  <Text type="secondary">荷兰税务局（报税入口）</Text>
                </li>
                <li>
                  <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/buitenland/content/30-procent-regeling" target="_blank" rel="noopener">
                    <LinkOutlined /> 30% Ruling 官方页面
                  </a>
                </li>
                <li>
                  <a href="https://www.wozwaardeloket.nl" target="_blank" rel="noopener">
                    <LinkOutlined /> WOZ Waardeloket
                  </a>
                  <br />
                  <Text type="secondary">免费查询房产 WOZ 值</Text>
                </li>
                <li>
                  <a href="https://www.digid.nl" target="_blank" rel="noopener">
                    <LinkOutlined /> DigiD
                  </a>
                  <br />
                  <Text type="secondary">数字身份系统</Text>
                </li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="税务计算工具">
              <ul style={{ paddingLeft: 16, lineHeight: 2.5 }}>
                <li>
                  <a href="https://thetax.nl" target="_blank" rel="noopener">
                    <LinkOutlined /> thetax.nl
                  </a>
                  <br />
                  <Text type="secondary">荷兰工资税计算器（含 30% Ruling）</Text>
                </li>
                <li>
                  <a href="https://www.berekenhet.nl" target="_blank" rel="noopener">
                    <LinkOutlined /> berekenhet.nl
                  </a>
                  <br />
                  <Text type="secondary">各种税务计算器</Text>
                </li>
                <li>
                  <a href="https://www.expatax.nl/30-percent-ruling-calculator" target="_blank" rel="noopener">
                    <LinkOutlined /> Expatax 30% 计算器
                  </a>
                </li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" size="small" title="中文税务服务">
              <ul style={{ paddingLeft: 16, lineHeight: 2.5 }}>
                <li>
                  <strong>WeChat 群</strong>
                  <br />
                  <Text type="secondary">搜索「荷兰华人报税」「荷兰KM互助」</Text>
                </li>
                <li>
                  <strong>中文税务顾问</strong>
                  <br />
                  <Text type="secondary">小红书/微信搜索荷兰中文税务师</Text>
                </li>
                <li>
                  <strong>Blue Umbrella / Expatax</strong>
                  <br />
                  <Text type="secondary">英文，Expat 友好税务公司</Text>
                </li>
                <li>
                  <strong>付费在线咨询</strong>
                  <br />
                  <Text type="secondary">€50-100 单次咨询，解答具体疑问</Text>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>

        <Divider>2026 年报税日历（申报 2025 税年）</Divider>

        <Row gutter={[16, 16]}>
          {[
            { month: '1-2月', events: ['收到 Jaaropgaaf 2025', '收到银行/保险年度报告', '确认银行余额'], color: '#1677ff' },
            { month: '3月', events: ['报税季开始！', '查看 2024 年申报作为参照', '准备材料'], color: '#52c41a' },
            { month: '4月', events: ['⚠️ 你现在在这里', '尽快完成报税', '或申请延期'], color: '#ff4d4f' },
            { month: '5月', events: ['5.1 报税截止日！', '如需延期务必在此前申请'], color: '#ff4d4f' },
            { month: '6-8月', events: ['等待税务局处理', '可能收到补充信息请求'], color: '#999' },
            { month: '9月', events: ['延期报税截止日（9.1）', '开始收到退税/补税通知'], color: '#fa8c16' },
          ].map((item, idx) => (
            <Col xs={12} sm={4} key={idx}>
              <Card size="small" style={{ borderTop: `3px solid ${item.color}`, height: '100%' }}>
                <Tag color={item.color} style={{ marginBottom: 8 }}>{item.month}</Tag>
                <ul style={{ paddingLeft: 16, fontSize: 13, lineHeight: 1.8 }}>
                  {item.events.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert
          style={{ marginTop: 24 }}
          message="免责声明"
          description="本页面内容仅供参考，不构成税务建议。荷兰税法每年变化，2025 税年数据基于公开信息整理。具体情况请咨询专业税务顾问（Belastingadviseur）或以 Belastingdienst 系统计算结果为准。"
          type="info"
          showIcon
        />
      </Card>
    </div>
  );
};

export default TipsAndResources;
