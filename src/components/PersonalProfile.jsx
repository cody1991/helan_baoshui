import React from 'react';
import { Card, Descriptions, Tag, Alert, Row, Col, Statistic, Timeline } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const PersonalProfile = () => {
  return (
    <div id="personal-profile">
      <Card
        className="section-card"
        title={
          <span>
            <UserOutlined style={{ marginRight: 8, color: '#e05206' }} />
            你的个人情况总览（2025 税年）
          </span>
        }
      >
        <Alert
          style={{ marginBottom: 16 }}
          message="2025 年 vs 2024 年的关键变化"
          description={
            <div>
              <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li><CheckCircleOutlined style={{ color: '#52c41a', marginRight: 4 }} /> 2025 年是你在荷兰的<strong>第一个完整纳税年度</strong>（全年 365 天），Heffingskorting 不再按比例</li>
                <li><CheckCircleOutlined style={{ color: '#52c41a', marginRight: 4 }} /> 2025.2 起开始还 ING 房贷，<strong>11 个月利息可在 Box 1 抵扣</strong></li>
                <li><WarningOutlined style={{ color: '#fa8c16', marginRight: 4 }} /> 30% Ruling 在 <strong>2025.12 从 30% 降为 20%</strong>（前 20 个月结束）</li>
                <li><CheckCircleOutlined style={{ color: '#52c41a', marginRight: 4 }} /> 2024 年已由专人处理报税，2025 年是<strong>第一次自己报税</strong></li>
              </ul>
            </div>
          }
          type="success"
          showIcon
        />

        <Descriptions bordered column={{ xs: 1, sm: 2 }} size="middle">
          <Descriptions.Item label="签证类型">
            <Tag color="blue">KM 签证（Kennismigrant）</Tag>
            高技术移民签证
          </Descriptions.Item>
          <Descriptions.Item label="在荷时间">
            2024.4.1 至今（在荷已满 1 年+）
          </Descriptions.Item>
          <Descriptions.Item label="2025 纳税身份">
            <Tag color="green">完整年度纳税居民</Tag>
            全年 365 天
          </Descriptions.Item>
          <Descriptions.Item label="30% Ruling 状态">
            <Tag color="orange">2025.1-11: 30% → 2025.12: 20%</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="房产状况">
            2024.12 购房，50㎡，独自居住
          </Descriptions.Item>
          <Descriptions.Item label="房贷银行">
            <Tag color="orange">ING</Tag>
            2025.2 起还贷（11 个月利息可抵扣）
          </Descriptions.Item>
          <Descriptions.Item label="报税方式">
            <Tag color="blue">自行报税</Tag>
            2024 年由专人处理，2025 年首次自报
          </Descriptions.Item>
        </Descriptions>

        <Row gutter={16} style={{ marginTop: 24 }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="2025 纳税天数"
                value={365}
                suffix="天"
                prefix={<CalendarOutlined />}
                valueStyle={{ color: '#21468b' }}
              />
              <div style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
                完整年度，无需按比例
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="房贷利息抵扣月数"
                value={11}
                suffix="个月"
                prefix={<HomeOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
              <div style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
                2025.2 - 2025.12
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="30% Ruling"
                value="30%→20%"
                prefix={<SafetyCertificateOutlined />}
                valueStyle={{ color: '#e05206', fontSize: 22 }}
              />
              <div style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
                2025.12 起降为 20%
              </div>
            </Card>
          </Col>
        </Row>

        <Card
          type="inner"
          title="2025 税年关键时间线"
          style={{ marginTop: 16 }}
        >
          <Timeline
            items={[
              {
                color: 'green',
                children: (
                  <div>
                    <h4>2025.1.1 - 新税年开始</h4>
                    <p>完整年度纳税居民。Box 3 资产基准日（1月1日资产快照）</p>
                  </div>
                ),
              },
              {
                color: 'green',
                children: (
                  <div>
                    <h4>2025.2 - 开始偿还 ING 房贷</h4>
                    <p>房贷利息开始产生，可在 Box 1 抵扣</p>
                  </div>
                ),
              },
              {
                color: 'orange',
                children: (
                  <div>
                    <h4>2025.11 末 - 30% 阶段结束</h4>
                    <p>前 20 个月（2024.4 - 2025.11）的 30% 免税期到期</p>
                  </div>
                ),
              },
              {
                color: 'blue',
                children: (
                  <div>
                    <h4>2025.12 - 进入 20% 免税阶段</h4>
                    <p>30% Ruling 降为 20%，持续至 2027.7</p>
                  </div>
                ),
              },
              {
                color: 'green',
                children: (
                  <div>
                    <h4>2025.12.31 - 税年结束</h4>
                    <p>Box 3 资产快照截止日。确认所有收入和抵扣</p>
                  </div>
                ),
              },
              {
                color: 'red',
                children: (
                  <div>
                    <h4>2026.3.1 - 报税季开始</h4>
                    <p>登录 Belastingdienst 提交 2025 年度申报</p>
                  </div>
                ),
              },
              {
                color: 'red',
                children: (
                  <div>
                    <h4>2026.5.1 - 报税截止日</h4>
                    <p>⚠️ 你现在正处于报税季！截止日 2026.5.1，可延期至 2026.9.1</p>
                  </div>
                ),
              },
            ]}
          />
        </Card>
      </Card>
    </div>
  );
};

export default PersonalProfile;
