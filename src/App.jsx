import React, { useState } from 'react';
import { Layout, Anchor, FloatButton, BackTop, Row, Col, Typography } from 'antd';
import {
  UserOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  FormOutlined,
  CalculatorOutlined,
  BulbOutlined,
  ArrowUpOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import PersonalProfile from './components/PersonalProfile';
import TaxOverview from './components/TaxOverview';
import ThirtyPercentRuling from './components/ThirtyPercentRuling';
import HousingTax from './components/HousingTax';
import TaxFiling from './components/TaxFiling';
import FilingWalkthrough from './components/FilingWalkthrough';
import TaxCalculation from './components/TaxCalculation';
import TipsAndResources from './components/TipsAndResources';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const anchorItems = [
  { key: 'personal-profile', href: '#personal-profile', title: '个人情况', icon: <UserOutlined /> },
  { key: 'tax-overview', href: '#tax-overview', title: '税制总览', icon: <BankOutlined /> },
  { key: 'thirty-percent', href: '#thirty-percent', title: '30% Ruling', icon: <SafetyCertificateOutlined /> },
  { key: 'housing-tax', href: '#housing-tax', title: '房产税务', icon: <HomeOutlined /> },
  { key: 'tax-filing', href: '#tax-filing', title: '报税流程', icon: <FormOutlined /> },
  { key: 'filing-walkthrough', href: '#filing-walkthrough', title: '逐屏填写指南', icon: <DesktopOutlined /> },
  { key: 'tax-calculation', href: '#tax-calculation', title: '税务计算', icon: <CalculatorOutlined /> },
  { key: 'tips-resources', href: '#tips-resources', title: '建议与资源', icon: <BulbOutlined /> },
];

const App = () => {
  return (
    <Layout className="site-layout">
      <Header className="site-header">
        <span className="header-title">🇳🇱 荷兰报税指南</span>
        <span className="header-subtitle">KM 签证持有者 · 2025 税年（2026 年申报）</span>
      </Header>

      <Content style={{ padding: '24px 0' }}>
        <Row gutter={24} style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
          <Col xs={0} md={0} lg={4}>
            <div className="nav-anchor">
              <Anchor
                offsetTop={80}
                items={anchorItems.map((item) => ({
                  key: item.key,
                  href: item.href,
                  title: (
                    <span>
                      {item.icon}
                      <span style={{ marginLeft: 8 }}>{item.title}</span>
                    </span>
                  ),
                }))}
              />
            </div>
          </Col>

          <Col xs={24} md={24} lg={20}>
            <div className="site-content" style={{ padding: 0 }}>
              {/* Hero Section */}
              <div className="hero-section">
                <h1>🇳🇱 荷兰个人所得税完全指南</h1>
                <p>
                  本指南专为持 <strong>KM（Kennismigrant）签证</strong> 的在荷中国人编写，
                  详细介绍荷兰个人所得税体系、30% Ruling 优惠、房产相关税务处理，
                  以及实际报税操作流程。所有内容均结合你的个人情况进行分析。
                </p>
                <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {anchorItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '4px 14px',
                        background: '#fff',
                        borderRadius: 20,
                        color: '#21468b',
                        fontSize: 13,
                        textDecoration: 'none',
                        border: '1px solid #d9d9d9',
                        transition: 'all 0.3s',
                      }}
                    >
                      {item.icon} {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <PersonalProfile />
              <TaxOverview />
              <ThirtyPercentRuling />
              <HousingTax />
              <TaxFiling />
              <FilingWalkthrough />
              <TaxCalculation />
              <TipsAndResources />
            </div>
          </Col>
        </Row>
      </Content>

      <Footer className="footer">
        <p>荷兰报税指南 © 2026 · 内容仅供参考，不构成税务建议</p>
        <p>如有疑问请咨询专业税务顾问（Belastingadviseur）</p>
      </Footer>

      <FloatButton.BackTop />
    </Layout>
  );
};

export default App;
