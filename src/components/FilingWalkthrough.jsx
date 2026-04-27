import React from 'react';
import { Card, Steps, Alert, Typography, Divider, Tag, Collapse, Table, Row, Col, Badge } from 'antd';
import {
  DesktopOutlined,
  LoginOutlined,
  ProfileOutlined,
  HomeOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  FundOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  SendOutlined,
  FileSearchOutlined,
  UserOutlined,
  EditOutlined,
  GlobalOutlined,
  DollarOutlined,
  AuditOutlined,
} from '@ant-design/icons';

const { Paragraph, Text, Title } = Typography;

const FilingWalkthrough = () => {
  const screenSteps = [
    {
      key: 'login',
      label: '第 0 步：登录系统',
      children: (
        <div>
          <div className="info-box">
            <strong>网址：</strong><a href="https://mijn.belastingdienst.nl" target="_blank" rel="noopener">mijn.belastingdienst.nl</a>
          </div>
          <Table
            pagination={false}
            bordered
            size="small"
            showHeader={false}
            columns={[
              { dataIndex: 'field', key: 'field', width: 200, render: (t) => <Text strong>{t}</Text> },
              { dataIndex: 'action', key: 'action' },
              { dataIndex: 'tip', key: 'tip', render: (t) => t ? <span><Tag color="blue">建议</Tag>{t}</span> : null },
            ]}
            dataSource={[
              { key: '1', field: '登录方式', action: '点击 "Inloggen" → 选择 DigiD', tip: '确保 DigiD App 已更新到最新版' },
              { key: '2', field: 'DigiD 验证', action: '打开 DigiD App → 扫描二维码 或 输入验证码', tip: '如果 DigiD 不工作，检查是否绑定了新手机号' },
              { key: '3', field: '选择报税年度', action: '进入后点击 "Inkomstenbelasting" → 选择 "2025"', tip: '' },
              { key: '4', field: '查看去年申报', action: '建议先点 "Eerder ingediende aangiften" 查看 2024 年申报副本', tip: '截图/打印 2024 年的申报，作为参照模板！' },
            ]}
          />
        </div>
      ),
    },
    {
      key: 'personal',
      label: '第 1 步：个人信息（Persoonlijke gegevens）',
      children: (
        <div>
          <Alert
            message="大部分已预填，主要是核对"
            type="success"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段', dataIndex: 'field', key: 'field', width: 220, render: (t) => <Text strong>{t}</Text> },
              { title: '你应该填/看到的', dataIndex: 'value', key: 'value' },
              { title: '操作建议', dataIndex: 'tip', key: 'tip', render: (t) => <span><Tag color="orange">操作</Tag>{t}</span> },
            ]}
            dataSource={[
              { key: '1', field: 'BSN（公民服务号）', value: '你的 9 位 BSN 号码', tip: '系统自动填写，核对即可' },
              { key: '2', field: 'Naam（姓名）', value: '你的姓名', tip: '核对拼写是否正确' },
              { key: '3', field: 'Geboortedatum（出生日期）', value: '你的出生日期', tip: '核对即可' },
              { key: '4', field: 'Adres（地址）', value: '你的 BRP 注册地址', tip: '⚠️ 确认是你的购房地址。如果 2025 年内搬过家，需要填两个地址' },
              { key: '5', field: 'Rekeningnummer（银行账号）', value: '你的荷兰 IBAN', tip: '退税会打到这个账户，确认正确！' },
              { key: '6', field: 'Fiscale partner（税务伴侣）', value: '选择 "Nee"（否）', tip: '你是一个人住，没有税务伴侣' },
            ]}
          />
        </div>
      ),
    },
    {
      key: 'income-overview',
      label: '第 2 步：收入总览（Overzicht inkomsten）',
      children: (
        <div>
          <Alert
            message="系统会列出它已知的你的收入来源，问你是否需要补充"
            type="info"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Paragraph>
            系统会显示一个勾选清单，问你 2025 年有哪些收入和情况。
            <strong>你需要勾选的项目：</strong>
          </Paragraph>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '问题/选项（荷兰语）', dataIndex: 'question', key: 'question', render: (t) => <Text code>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你的选择', dataIndex: 'choice', key: 'choice', width: 100, render: (t) => <Tag color={t === '是' ? 'green' : 'default'}>{t}</Tag> },
              { title: '说明', dataIndex: 'note', key: 'note' },
            ]}
            dataSource={[
              { key: '1', question: 'Loon, uitkering of pensioen', meaning: '工资、福利或养老金', choice: '是', note: '你有工资收入' },
              { key: '2', question: 'Eigen woning', meaning: '自住房', choice: '是', note: '你有房子和房贷' },
              { key: '3', question: 'Banktegoeden, beleggingen, onroerend goed, etc. (Box 3)', meaning: 'Box 3 资产', choice: '是', note: '你需要填写资产信息' },
              { key: '4', question: 'Aftrekposten', meaning: '抵扣项', choice: '视情况', note: '如果有特殊医疗费用或捐款' },
              { key: '5', question: 'Winst uit onderneming', meaning: '经营收入', choice: '否', note: '你是雇员，不是自雇' },
              { key: '6', question: 'Aanmerkelijk belang (Box 2)', meaning: '重大利益持股', choice: '否', note: '除非你持有公司 ≥5% 股份' },
              { key: '7', question: 'Buitenlands inkomen', meaning: '海外收入', choice: '视情况', note: '如果你在中国有收入来源' },
            ]}
          />
          <div className="highlight-box" style={{ marginTop: 12 }}>
            <strong>提示：</strong>勾选后，系统只会展示你勾选的相关页面。如果遗漏了某项，可以随时返回这一步补充。
          </div>
        </div>
      ),
    },
    {
      key: 'box1-income',
      label: '第 3 步：Box 1 — 工资收入（Loon）',
      children: (
        <div>
          <Alert
            message="这是最关键的一步 — 核对工资和 30% Ruling"
            type="warning"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Paragraph>
            系统会预填你雇主上报的数据（来自 Jaaropgaaf）。你需要逐项核对：
          </Paragraph>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段（荷兰语）', dataIndex: 'field', key: 'field', width: 280, render: (t) => <Text strong>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你应该看到什么', dataIndex: 'expect', key: 'expect' },
              { title: '操作建议', dataIndex: 'tip', key: 'tip' },
            ]}
            dataSource={[
              { key: '1', field: 'Naam inhoudingsplichtige', meaning: '雇主名称', expect: '你雇主的公司名', tip: '确认是正确的雇主' },
              { key: '2', field: 'Loon / inkomsten uit tegenwoordige arbeid', meaning: '当前工作的工资/收入', expect: '你的应税工资总额（Bruto 减去 30% Ruling 免税部分后的数字）', tip: '⚠️ 核对！这应该是扣除 30%/20% 免税后的数字' },
              { key: '3', field: 'Ingehouden loonheffing', meaning: '已预扣的工资税', expect: '雇主全年代扣的税额', tip: '对照 Jaaropgaaf 核对' },
              { key: '4', field: 'Ingehouden bijdrage Zvw', meaning: '已扣医保费', expect: '医疗保险费用', tip: '核对即可' },
              { key: '5', field: 'Vergoeding extraterritoriale kosten (30% regeling)', meaning: '30% Ruling 免税津贴', expect: '约 €20,417（假设年薪 €70k）', tip: '⚠️ 关键！核对是否正确反映了 1-11月 30% + 12月 20%' },
              { key: '6', field: 'Code loonbelastingtabel', meaning: '工资税表代码', expect: '通常是 "950" 或类似', tip: '核对即可' },
            ]}
          />
          <div className="danger-box" style={{ marginTop: 12 }}>
            <WarningOutlined style={{ marginRight: 8 }} />
            <strong>最重要的核对点：30% Ruling 免税额</strong>
            <p style={{ marginTop: 8 }}>
              你的 Jaaropgaaf 上应该显示 2025 年的免税津贴总额。计算方法：
            </p>
            <ul style={{ paddingLeft: 20 }}>
              <li>1-11 月工资 × 30% = 第一段免税额</li>
              <li>12 月工资 × 20% = 第二段免税额</li>
              <li>两者相加 = 总免税额</li>
            </ul>
            <p>如果 Jaaropgaaf 的数字与计算不符，联系雇主 HR 更正后再报税。</p>
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>如果预填数据有误怎么办？</strong>
            <p>你可以直接在系统中修改数字。系统可能会标黄提示你"与雇主数据不一致"，
              但这不影响提交。税务局后续如有疑问会联系你。</p>
          </div>
        </div>
      ),
    },
    {
      key: 'box1-woning',
      label: '第 4 步：Box 1 — 自住房（Eigen Woning）',
      children: (
        <div>
          <Alert
            message="2025 年你有完整一年的房产 + 按 ING 年度报告确认的房贷利息抵扣，这是主要的减税项"
            type="success"
            showIcon
            style={{ marginBottom: 12 }}
          />

          <Title level={5}>4a. 房屋基本信息</Title>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段', dataIndex: 'field', key: 'field', width: 280, render: (t) => <Text strong>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你应该填什么', dataIndex: 'value', key: 'value' },
              { title: '建议', dataIndex: 'tip', key: 'tip' },
            ]}
            dataSource={[
              { key: '1', field: 'Had u een eigen woning?', meaning: '你有自住房吗？', value: '选 "Ja"（是）', tip: '' },
              { key: '2', field: 'Adres eigen woning', meaning: '自住房地址', value: '你的房屋地址', tip: '如果预填了，核对即可' },
              { key: '3', field: 'WOZ-waarde（peildatum 1-1-2025）', meaning: 'WOZ 值（基准日 2025.1.1）', value: '填写你 2025 年收到的 WOZ-beschikking 上的金额（如 €260,000）', tip: '⚠️ 注意用 2025.1.1 基准日的值，不是 2026 年的' },
              { key: '4', field: 'Periode eigen woning', meaning: '拥有房屋的时间段', value: '2025 全年：1-1-2025 至 31-12-2025', tip: '你 2024.12 购房，所以 2025 全年都是房主' },
              { key: '5', field: 'Eigenwoningforfait', meaning: '自住房虚拟收入', value: '系统自动计算（WOZ × 0.35%）', tip: '确认金额是否约 €910（假设 WOZ €260k）' },
            ]}
          />

          <Divider />
          <Title level={5}>4b. 房贷信息（Hypotheek）</Title>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段', dataIndex: 'field', key: 'field', width: 280, render: (t) => <Text strong>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你应该填什么', dataIndex: 'value', key: 'value' },
              { title: '建议', dataIndex: 'tip', key: 'tip' },
            ]}
            dataSource={[
              { key: '1', field: 'Heeft u een hypotheek?', meaning: '你有房贷吗？', value: '选 "Ja"（是）', tip: '' },
              { key: '2', field: 'Geldverstrekker', meaning: '贷款银行', value: 'ING Bank', tip: '从 ING Jaaroverzicht 获取' },
              { key: '3', field: 'Contractnummer', meaning: '合同编号', value: '你的 ING 房贷合同号', tip: 'ING Jaaroverzicht 上有' },
              { key: '4', field: 'Type hypotheek', meaning: '房贷类型', value: 'Annuïteitenhypotheek（年金房贷）或 Lineaire hypotheek（线性房贷）', tip: '看你和 ING 签的是哪种' },
              { key: '5', field: 'Schuld 1-1-2025', meaning: '2025.1.1 贷款余额', value: '从 ING Jaaroverzicht 获取', tip: '年初余额' },
              { key: '6', field: 'Schuld 31-12-2025', meaning: '2025.12.31 贷款余额', value: '从 ING Jaaroverzicht 获取', tip: '年末余额' },
              { key: '7', field: 'Betaalde rente', meaning: '已付利息总额', value: '从 ING Jaaroverzicht 2025 获取精确值', tip: '⚠️ 这是最重要的数字；2025.2 首期还款可能包含前期结算利息，不要按固定月数手算替代！' },
              { key: '8', field: 'Looptijd in maanden', meaning: '贷款期限（月数）', value: '你的贷款期限，如 360 个月（30 年）', tip: '' },
              { key: '9', field: 'Begindatum', meaning: '贷款开始日', value: '你的房贷合同/放款开始日期（可能是 2024.12 或 ING 文件上的日期）', tip: '以 ING 文件为准，不一定等于首次扣款月份' },
            ]}
          />

          <div className="success-box" style={{ marginTop: 12 }}>
            <strong>Eigen Woning 填写完成后的效果：</strong>
            <p>系统会自动计算：Eigenwoningforfait（示例 +€910）- 房贷利息抵扣（按 ING 年度报告实际金额）= <strong>净减少应税收入</strong></p>
          </div>
        </div>
      ),
    },
    {
      key: 'partieel',
      label: '第 5 步：部分非居民纳税人选择（Partieel buitenlands belastingplichtige）',
      children: (
        <div>
          <Alert
            message="这是 30% Ruling 的重要附加福利，让海外资产免缴 Box 3 税"
            type="warning"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段', dataIndex: 'field', key: 'field', width: 320, render: (t) => <Text strong>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你应该选什么', dataIndex: 'value', key: 'value' },
              { title: '建议', dataIndex: 'tip', key: 'tip' },
            ]}
            dataSource={[
              { key: '1', field: 'Kiest u voor partieel buitenlandse belastingplicht?', meaning: '你是否选择部分非居民纳税人身份？', value: '选 "Ja"（是）', tip: '⚠️ 非常重要！和 2024 年保持一致' },
              { key: '2', field: 'Heeft u de 30%-regeling?', meaning: '你是否有 30% Ruling？', value: '选 "Ja"（是）', tip: '' },
              { key: '3', field: 'Beschikking 30%-regeling', meaning: '30% Ruling 批准文号', value: '填写税务局批准函上的文号', tip: '2024 年的税务顾问应该有这个号码' },
            ]}
          />
          <div className="highlight-box" style={{ marginTop: 12 }}>
            <strong>选择后的效果：</strong>
            <ul style={{ paddingLeft: 20, marginTop: 8, marginBottom: 0 }}>
              <li>Box 2 和 Box 3 只需申报<strong>荷兰境内</strong>的资产</li>
              <li>中国的银行存款、投资、房产等 <strong>不需要在荷兰报税</strong></li>
              <li>但 Algemene heffingskorting（通用税收抵免）可能受到影响：需要满足 90% 规则（全球收入的 90% 以上来自荷兰）</li>
            </ul>
          </div>
          <div className="danger-box" style={{ marginTop: 12 }}>
            <strong>90% 规则自测：</strong>
            <p>如果你在中国没有其他收入（如房租、投资），你的全球收入 100% 来自荷兰工资 → 满足 90% 规则 → 可享受完整的 Heffingskorting。
              如果你在中国有其他收入，需要计算占比。</p>
          </div>
        </div>
      ),
    },
    {
      key: 'box3',
      label: '第 6 步：Box 3 — 储蓄与投资（Sparen en beleggen）',
      children: (
        <div>
          <Alert
            message="选了部分非居民身份后，只需填荷兰境内资产"
            type="info"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Paragraph>
            Box 3 对你的资产征税。系统会问你在 <strong>2025 年 1 月 1 日</strong> 的资产和债务情况。
          </Paragraph>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '字段', dataIndex: 'field', key: 'field', width: 280, render: (t) => <Text strong>{t}</Text> },
              { title: '中文含义', dataIndex: 'meaning', key: 'meaning' },
              { title: '你应该填什么', dataIndex: 'value', key: 'value' },
              { title: '建议', dataIndex: 'tip', key: 'tip' },
            ]}
            dataSource={[
              { key: '1', field: 'Bank- en spaartegoeden', meaning: '银行和储蓄余额', value: '你在荷兰银行（ING 等）2025.1.1 的余额', tip: '⚠️ 只填荷兰银行的（因为你选了部分非居民）' },
              { key: '2', field: 'Beleggingen', meaning: '投资', value: '荷兰券商/平台上的投资（如 DeGiro 等）在 2025.1.1 的市值', tip: '如果没有荷兰投资，填 €0' },
              { key: '3', field: 'Onroerende zaken (niet eigen woning)', meaning: '非自住房产', value: '如果你在荷兰有其他房产填写，否则 €0', tip: '自住房不算在 Box 3 里' },
              { key: '4', field: 'Overige bezittingen', meaning: '其他资产', value: '荷兰境内其他资产（如加密货币等）', tip: '' },
              { key: '5', field: 'Schulden', meaning: '债务', value: '非房贷债务（如消费贷等）', tip: '房贷已在 Box 1 处理，不在这里填' },
              { key: '6', field: 'Drempelbedrag schulden', meaning: '债务起征额', value: '2025 年：€3,700/人', tip: '只有超过此金额的债务才能抵扣' },
              { key: '7', field: 'Heffingsvrij vermogen', meaning: '免征额', value: '2025 年：€57,684/人', tip: '系统自动计算，净资产低于此免税' },
            ]}
          />
          <div className="success-box" style={{ marginTop: 12 }}>
            <strong>如果你的荷兰净资产（银行+投资-债务）低于 €57,684：</strong>
            <p>Box 3 税额为 €0，不需要缴纳任何储蓄投资税。</p>
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2025 年新选项 — 实际收益率申报：</strong>
            <p>2025 年你可以选择按实际收益率申报 Box 3。系统会自动比较虚拟收益率和实际收益率，
              选择对你更有利的方案。如果你的荷兰银行存款利息很低，实际收益率可能更划算。</p>
          </div>
        </div>
      ),
    },
    {
      key: 'heffingskorting',
      label: '第 7 步：税收抵免（Heffingskortingen）',
      children: (
        <div>
          <Alert
            message="系统自动计算，但需要确认是否正确"
            type="info"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '抵免项', dataIndex: 'field', key: 'field', width: 300, render: (t) => <Text strong>{t}</Text> },
              { title: '2025 年金额', dataIndex: 'amount', key: 'amount' },
              { title: '说明', dataIndex: 'note', key: 'note' },
            ]}
            dataSource={[
              { key: '1', field: 'Algemene heffingskorting（通用税收抵免）', amount: '最高 €3,068', note: '人人享有，随收入递减。2025 年完整享受（不按比例）' },
              { key: '2', field: 'Arbeidskorting（劳动税收抵免）', amount: '最高 €5,599', note: '有工作收入即享有，随收入递减' },
              { key: '3', field: 'Inkomensafhankelijke combinatiekorting', amount: '不适用', note: '需要有 12 岁以下子女' },
              { key: '4', field: 'Jonggehandicaptenkorting', amount: '不适用', note: '需要有残疾人士证明' },
            ]}
          />
          <div className="highlight-box" style={{ marginTop: 12 }}>
            <strong>对比 2024 年：</strong>
            2024 年你只享受了 275/366 = 75.1% 的抵免额度。
            2025 年是完整年度，享受 <strong>100% 的抵免</strong>。
            仅此一项，比 2024 年多享受约 €2,000 的抵免。
          </div>
        </div>
      ),
    },
    {
      key: 'summary',
      label: '第 8 步：汇总审核（Overzicht / Samenvatting）',
      children: (
        <div>
          <Alert
            message="提交前的最后检查 — 仔细核对每个数字"
            type="warning"
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Paragraph>
            系统会显示完整的计算汇总。你需要检查以下关键数字：
          </Paragraph>
          <Table
            pagination={false}
            bordered
            size="small"
            columns={[
              { title: '汇总项', dataIndex: 'field', key: 'field', width: 300, render: (t) => <Text strong>{t}</Text> },
              { title: '你应该看到什么', dataIndex: 'expect', key: 'expect' },
              { title: '如果不对', dataIndex: 'action', key: 'action' },
            ]}
            dataSource={[
              { key: '1', field: 'Verzamelinkomen（总收入）', expect: '你的应税收入总额', action: '检查工资、房产净额、Box 3 是否都对' },
              { key: '2', field: 'Inkomstenbelasting Box 1', expect: '税额应在合理范围', action: '对照前面计算示例' },
              { key: '3', field: 'Aftrek eigen woning（自住房抵扣）', expect: '应该是负数（减税效果）', action: '如果为 0，检查房贷信息是否正确填写' },
              { key: '4', field: 'Heffingskortingen（税收抵免）', expect: '约 €8,000-9,000', action: '如果很低，检查是否误选了非居民身份' },
              { key: '5', field: 'Ingehouden loonheffing（已预扣税）', expect: '雇主全年代扣的总额', action: '对照 Jaaropgaaf' },
              { key: '6', field: 'Te betalen / terug te ontvangen', expect: '最终结果：退税或补缴', action: '⚠️ 如果要退税 > €5,000 或补缴 > €2,000，仔细复查所有数据' },
            ]}
          />
          <div className="success-box" style={{ marginTop: 12 }}>
            <strong>预期结果（基于假设数据）：</strong>
            <p>如果你的情况接近假设（年薪 €70k，房贷 €200k，利率 4%），
              你应该看到 <strong>退税约 €2,000 - €4,000</strong> 的结果。
              主要原因：房贷利息抵扣 + 完整 Heffingskorting + 30% Ruling。</p>
          </div>
        </div>
      ),
    },
    {
      key: 'submit',
      label: '第 9 步：签署并提交（Ondertekenen en verzenden）',
      children: (
        <div>
          <Table
            pagination={false}
            bordered
            size="small"
            showHeader={false}
            columns={[
              { dataIndex: 'step', key: 'step', width: 60, render: (t) => <Badge count={t} style={{ backgroundColor: '#e05206' }} /> },
              { dataIndex: 'action', key: 'action', render: (t) => <Text strong>{t}</Text> },
              { dataIndex: 'note', key: 'note' },
            ]}
            dataSource={[
              { key: '1', step: 1, action: '点击 "Ondertekenen"（签署）', note: '用你的 DigiD 进行数字签署' },
              { key: '2', step: 2, action: '确认 DigiD 验证', note: '打开 DigiD App 确认' },
              { key: '3', step: 3, action: '点击 "Verzenden"（发送）', note: '一旦发送就提交了' },
              { key: '4', step: 4, action: '看到 "Ontvangstbevestiging"（确认收到）', note: '⚠️ 一定要看到这个页面才算成功！' },
              { key: '5', step: 5, action: '截图/保存确认页', note: '作为提交凭证留存' },
              { key: '6', step: 6, action: '等待税务局处理', note: '通常 3-12 周收到最终评估（Aanslag）' },
            ]}
          />
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>提交后：</strong>
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li>退税通常在收到 Aanslag 后 <strong>1 周内</strong> 打到你的银行账户</li>
              <li>如果需要补缴，会收到缴款通知，通常有 6 周付款期</li>
              <li>如果税务局对你的申报有疑问，会发信要求补充材料（Verzoek om informatie）</li>
              <li>你可以在 <strong>Mijn Belastingdienst</strong> 随时查看处理状态</li>
            </ul>
          </div>
          <Alert
            style={{ marginTop: 12 }}
            message="提交后发现错误？"
            description="提交后如果发现填错了，可以重新提交一次（系统允许多次提交，以最后一次为准）。但建议不要拖太久，最好在截止日前更正。"
            type="info"
            showIcon
          />
        </div>
      ),
    },
  ];

  return (
    <div id="filing-walkthrough">
      <Card
        className="section-card"
        title={
          <span>
            <DesktopOutlined style={{ marginRight: 8, color: '#e05206' }} />
            Belastingdienst 报税系统 — 逐屏填写指南
            <span className="personal-tag">手把手教学</span>
          </span>
        }
      >
        <Alert
          message="当前申报状态（基于你的 Belastingdienst 截图）"
          description={
            <div>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <div style={{ padding: 12, border: '2px solid #e05206', borderRadius: 6, background: '#fffbf0' }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#e05206' }}>2025 年申报</h4>
                    <p style={{ margin: '4px 0', color: '#e05206', fontWeight: 'bold' }}>
                      <WarningOutlined style={{ marginRight: 4 }} />
                      状态：未提交（Aangifte inkomstenbelasting 2025 open staan）
                    </p>
                    <p style={{ margin: '4px 0', fontSize: 12 }}>
                      截止日：2026.5.1（可延至 2026.9.1）
                    </p>
                    <p style={{ margin: '4px 0', fontSize: 12 }}>
                      你现在需要选择 "Openen" 开始填写
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div style={{ padding: 12, border: '2px solid #52c41a', borderRadius: 6, background: '#f6ffed' }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#52c41a' }}>2024 年申报</h4>
                    <p style={{ margin: '4px 0', color: '#52c41a', fontWeight: 'bold' }}>
                      <CheckCircleOutlined style={{ marginRight: 4 }} />
                      主申报：已提交（Aangifte ver-stuurd）
                    </p>
                    <p style={{ margin: '4px 0', fontSize: 12 }}>
                      但仍有补充申报待完成：
                    </p>
                    <ul style={{ margin: '4px 0', paddingLeft: 16, fontSize: 12 }}>
                      <li>Box 3 实际收益报表</li>
                      <li>部分时间境外居住者申报表</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
                <strong>操作建议：</strong>先完成 2025 年主申报（截止日临近），之后再处理 2024 年的补充申报。
              </div>
            </div>
          }
          type="warning"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <Alert
          message="使用说明"
          description={
            <div>
              <p>下面按照 Belastingdienst 在线报税系统的<strong>实际页面顺序</strong>，逐步列出每个屏幕需要填写的字段、
                你应该填什么值、以及操作建议。每个步骤对应系统中的一个页面或模块。</p>
              <p><strong>准备材料：</strong>Jaaropgaaf 2025、ING 房贷 Jaaroverzicht、WOZ-beschikking 2025、
                DigiD、2024 年申报副本（参照用）。</p>
            </div>
          }
          type="info"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <Collapse
          items={screenSteps}
          defaultActiveKey={[]}
          size="large"
          accordion={false}
        />

        <Divider>常见「卡住」的地方和解决方案</Divider>

        <Table
          pagination={false}
          bordered
          size="small"
          columns={[
            { title: '问题', dataIndex: 'problem', key: 'problem', render: (t) => <Text strong>{t}</Text> },
            { title: '原因', dataIndex: 'cause', key: 'cause' },
            { title: '解决方案', dataIndex: 'solution', key: 'solution' },
          ]}
          dataSource={[
            { key: '1', problem: '系统中看不到房贷数据', cause: 'ING 可能未及时上报到税务局', solution: '手动填写 ING Jaaroverzicht 上的数据' },
            { key: '2', problem: 'WOZ 值显示的是 2026 年的', cause: '系统可能默认显示最新 WOZ', solution: '手动改为 2025.1.1 基准日的 WOZ 值' },
            { key: '3', problem: '找不到 30% Ruling 选项', cause: '可能没有勾选正确的收入类别', solution: '返回第 2 步，确认勾选了 "Loon" 相关选项' },
            { key: '4', problem: '部分非居民选项灰色不可选', cause: '需要先填写 30% Ruling 信息', solution: '先完成 Box 1 工资部分，确认 30% Ruling 后再回来选' },
            { key: '5', problem: 'Heffingskorting 金额异常低', cause: '选了部分非居民但不满足 90% 规则', solution: '检查是否有中国收入未申报；如果 100% 荷兰收入应该正常' },
            { key: '6', problem: '系统提示数据不一致（黄色警告）', cause: '你修改了预填数据', solution: '没关系，只要你确认数据正确就可以继续提交' },
            { key: '7', problem: '15分钟无操作被登出', cause: '系统安全策略', solution: '数据已自动保存，重新登录即可继续' },
            { key: '8', problem: '提交后想修改', cause: '发现错误', solution: '可以重新提交一次，以最后一次为准' },
          ]}
        />

        <Divider>填写时间预估</Divider>

        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Card type="inner" size="small" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: '#e05206', fontWeight: 700 }}>30-45</div>
              <div style={{ color: '#666' }}>分钟</div>
              <div style={{ color: '#999', fontSize: 12 }}>准备材料（收集文件、查余额）</div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card type="inner" size="small" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: '#e05206', fontWeight: 700 }}>45-60</div>
              <div style={{ color: '#666' }}>分钟</div>
              <div style={{ color: '#999', fontSize: 12 }}>在线填写（首次自己报税）</div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card type="inner" size="small" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: '#e05206', fontWeight: 700 }}>15-20</div>
              <div style={{ color: '#666' }}>分钟</div>
              <div style={{ color: '#999', fontSize: 12 }}>审核确认 + 提交</div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FilingWalkthrough;
