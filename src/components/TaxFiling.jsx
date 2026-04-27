import React from 'react';
import { Card, Steps, Alert, Typography, Divider, Tag, Collapse, Table, Row, Col } from 'antd';
import {
  FormOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  LaptopOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Paragraph, Text, Title } = Typography;

const TaxFiling = () => {
  const documentData = [
    { key: '1', doc: 'Jaaropgaaf 2025（年度收入汇总）', source: '雇主（2026 年 2 月前发）', box: 'Box 1', required: true, note: '核对 30%→20% 过渡免税额是否正确' },
    { key: '2', doc: 'WOZ-beschikking 2025（房产评估）', source: '市政府（2025 年 2-3 月已发）', box: 'Box 1', required: true, note: '用 2025.1.1 基准日的 WOZ 值' },
    { key: '3', doc: 'ING 房贷年度报告（Jaaroverzicht）', source: 'ING App / 邮寄', box: 'Box 1', required: true, note: '包含全年利息总额，直接填入' },
    { key: '4', doc: 'DigiD 账户', source: '你应该已有', box: '—', required: true, note: '2024 年报税时已使用过' },
    { key: '5', doc: 'BSN 号码', source: '—', box: '—', required: true, note: '' },
    { key: '6', doc: '银行存款余额（2025.1.1 & 2025.12.31）', source: '银行 App/Statement', box: 'Box 3', required: true, note: '若选部分非居民，仅需荷兰银行' },
    { key: '7', doc: '30% Ruling 批准函', source: '税务局 Belastingdienst', box: 'Box 1', required: true, note: '确认仍在有效期内' },
    { key: '8', doc: '健康保险年度报告', source: '保险公司', box: '—', required: false, note: '' },
    { key: '9', doc: '2024 年报税副本', source: '税务顾问 / Belastingdienst', box: '参考', required: false, note: '对照去年填法，保持一致' },
  ];

  const docColumns = [
    {
      title: '必需',
      dataIndex: 'required',
      key: 'required',
      width: 60,
      render: (val) => val ? <Tag color="red">必需</Tag> : <Tag>推荐</Tag>,
    },
    { title: '文件', dataIndex: 'doc', key: 'doc' },
    { title: '来源', dataIndex: 'source', key: 'source' },
    {
      title: '用于',
      dataIndex: 'box',
      key: 'box',
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
    { title: '提示', dataIndex: 'note', key: 'note', render: (text) => <Text type="secondary" style={{ fontSize: 12 }}>{text}</Text> },
  ];

  const collapseItems = [
    {
      key: '1',
      label: '第一次自己报税，具体怎么操作？（Step by Step）',
      children: (
        <div>
          <Alert
            message="好消息：你已经有了 2024 年的经验作为参照"
            description="2024 年的税务顾问处理过一次后，很多信息已经在系统中了。你可以在线查看去年的申报（Mijn Belastingdienst → Eerder ingediende aangiften），对照着填。"
            type="success"
            showIcon
            style={{ marginBottom: 16 }}
          />
          <ol style={{ paddingLeft: 20, lineHeight: 2.5 }}>
            <li>
              <strong>登录</strong>：访问 <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener">belastingdienst.nl</a>，
              用 DigiD 登录
            </li>
            <li>
              <strong>选择年份</strong>：选择「Aangifte inkomstenbelasting 2025」
            </li>
            <li>
              <strong>确认预填信息</strong>：系统会自动预填很多数据：
              <ul>
                <li>✅ 工资收入（来自雇主的 Jaaropgaaf）</li>
                <li>✅ 银行利息收入</li>
                <li>✅ 银行存款余额（部分银行自动上报）</li>
                <li>⚠️ 房产和房贷信息（可能需要手动补充或确认）</li>
              </ul>
            </li>
            <li>
              <strong>Box 1 - 工资部分</strong>：
              <ul>
                <li>确认工资总额和预扣税（Loonheffing）</li>
                <li>确认 30% Ruling 免税金额（注意 30%→20% 过渡）</li>
              </ul>
            </li>
            <li>
              <strong>Box 1 - 自住房部分（Eigen Woning）</strong>：
              <ul>
                <li>填写 WOZ 值（用 2025.1.1 基准日的值）</li>
                <li>填写房贷余额、年利息支出（从 ING Jaaroverzicht 获取）</li>
                <li>系统自动计算 Eigenwoningforfait</li>
              </ul>
            </li>
            <li>
              <strong>部分非居民纳税人选择</strong>：
              <ul>
                <li>勾选「Keuze partieel buitenlandse belastingplicht」</li>
                <li>这样 Box 3 只需申报荷兰境内资产</li>
              </ul>
            </li>
            <li>
              <strong>Box 3 - 资产</strong>：
              <ul>
                <li>如选择部分非居民：只填荷兰银行余额和荷兰投资</li>
                <li>如未选择：需填全球资产</li>
                <li>填写基准日（2025.1.1）的资产余额</li>
              </ul>
            </li>
            <li>
              <strong>确认并提交</strong>：系统自动计算应退/应补税额，确认后提交
            </li>
          </ol>
        </div>
      ),
    },
    {
      key: '2',
      label: '如何查看 2024 年的报税内容（作为参照）？',
      children: (
        <div>
          <ol style={{ paddingLeft: 20, lineHeight: 2.5 }}>
            <li>登录 <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener">belastingdienst.nl</a></li>
            <li>进入「Mijn Belastingdienst」</li>
            <li>点击「Eerder ingediende aangiften」（之前提交的申报）</li>
            <li>选择 2024 年的申报</li>
            <li>可以查看完整的填写内容和最终计算结果</li>
          </ol>
          <div className="highlight-box">
            <strong>强烈建议：</strong>在开始 2025 年申报前，先把 2024 年的申报内容打印或截图，
            逐项对照填写。特别注意：自住房信息、30% Ruling 选项、部分非居民选择等关键项。
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: '2025 年可以不请税务顾问吗？',
      children: (
        <div>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card type="inner" title="自己报税的可行性" size="small">
                <div className="success-box">
                  <p><strong>相比 2024 年，2025 年自己报税更可行：</strong></p>
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>✅ 2024 年的申报可作为参照模板</li>
                    <li>✅ 2025 年是完整年度，不需要处理部分居民的复杂性</li>
                    <li>✅ 荷兰在线系统会预填大部分数据</li>
                    <li>✅ 主要需要填写的就是房产+30% Ruling</li>
                    <li>⚠️ 需注意 30%→20% 过渡的免税额计算</li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card type="inner" title="建议" size="small">
                <Paragraph>
                  <strong>如果你 2024 年的税务顾问留给你了完整的申报文件</strong>，
                  2025 年自己报税是完全可行的。重点关注：
                </Paragraph>
                <ul style={{ paddingLeft: 20 }}>
                  <li>30% → 20% 过渡：核对 Jaaropgaaf 数据</li>
                  <li>房贷利息：直接用 ING 年度报告数字</li>
                  <li>部分非居民身份：和去年保持一致</li>
                  <li>如有疑问，可以考虑付费做一次在线咨询（€50-100）而非全程委托</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: '4',
      label: '2025 年税收抵免（Heffingskorting）总览',
      children: (
        <div>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '抵扣项', dataIndex: 'name', key: 'name' },
              { title: '2025 年金额', dataIndex: 'amount', key: 'amount' },
              { title: '说明', dataIndex: 'desc', key: 'desc' },
            ]}
            dataSource={[
              {
                key: '1',
                name: 'Algemene heffingskorting（通用税收抵免）',
                amount: '最高 €3,068',
                desc: '人人享有，随收入递减；2025 年完整享受（不再按比例）',
              },
              {
                key: '2',
                name: 'Arbeidskorting（劳动税收抵免）',
                amount: '最高 €5,599',
                desc: '有工作收入即享有，随收入递减',
              },
              {
                key: '3',
                name: 'Hypotheekrenteaftrek（房贷利息抵扣）',
                amount: '实际利息金额（以 ING Jaaroverzicht 2025 为准）',
                desc: '自住房房贷利息，直接减少 Box 1 应税收入',
              },
            ]}
          />
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>重要：</strong>2025 年是完整纳税年度，Heffingskorting 不再按居住天数比例计算。
            相比 2024 年（只享受 75.1%），2025 年享受 100% 的抵免额度。
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="tax-filing">
      <Card
        className="section-card"
        title={
          <span>
            <FormOutlined style={{ marginRight: 8, color: '#e05206' }} />
            2025 税年报税流程 — 第一次自己报
          </span>
        }
      >
        <Alert
          message={
            <span>
              <strong>⚠️ 你现在正处于报税季！</strong>
            </span>
          }
          description={
            <span>
              2025 税年报税季：<strong>2026 年 3 月 1 日 - 5 月 1 日</strong>。
              现在是 2026 年 4 月，距离截止日还有约 2 周。
              如果需要更多时间，可在 5 月 1 日前通过 Belastingdienst 网站申请延期至 2026 年 9 月 1 日。
            </span>
          }
          type="error"
          showIcon
          icon={<ClockCircleOutlined />}
        />

        <Divider>报税步骤</Divider>

        <Steps
          direction="vertical"
          current={-1}
          items={[
            {
              title: '第一步：准备材料',
              description: '收集所有必需文件（见下方清单）。先查看 2024 年申报作为参照',
              icon: <FileTextOutlined />,
            },
            {
              title: '第二步：登录 Belastingdienst',
              description: '用 DigiD 登录，选择 Aangifte inkomstenbelasting 2025',
              icon: <LaptopOutlined />,
            },
            {
              title: '第三步：确认预填信息',
              description: '检查系统预填的雇主数据、银行数据等。核对 Jaaropgaaf 中 30%→20% 免税额',
              icon: <CheckCircleOutlined />,
            },
            {
              title: '第四步：填写 Box 1 — 工资 + 房产',
              description: '确认工资和 30% Ruling；填写 WOZ 值、房贷信息',
              icon: <FormOutlined />,
            },
            {
              title: '第五步：选择部分非居民 + 填写 Box 3',
              description: '勾选「partieel buitenlands belastingplichtige」→ 只填荷兰资产',
              icon: <FormOutlined />,
            },
            {
              title: '第六步：确认计算结果并提交',
              description: '核对应退/应补金额是否合理，确认后提交。通常 3-6 个月收到最终评估',
              icon: <FormOutlined />,
            },
          ]}
        />

        <Divider>必需文件清单（2025 税年）</Divider>

        <Table
          columns={docColumns}
          dataSource={documentData}
          pagination={false}
          bordered
          size="small"
          scroll={{ x: true }}
        />

        <Divider>常见问题</Divider>

        <Collapse items={collapseItems} />
      </Card>
    </div>
  );
};

export default TaxFiling;
