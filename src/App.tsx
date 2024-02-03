// src/App.tsx

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import NewsList from './components/NewsList';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(''); // Set your default category

  const handleMenuClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['news']}>
          <Menu.Item key="news" onClick={() => handleMenuClick('')}>All</Menu.Item>
          <Menu.Item key="business" onClick={() => handleMenuClick('business')}>Business</Menu.Item>
          <Menu.Item key="entertainment" onClick={() => handleMenuClick('entertainment')}>Entertainment</Menu.Item>
          {/* Add more categories as needed */}
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <div className="site-layout-content">
          <NewsList activeCategory={activeCategory} />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
