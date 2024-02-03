// src/components/NewsList.tsx

import React, { useEffect, useState } from 'react';
import { Row, Col, Typography} from 'antd';
import { getNews, country } from './api/newsApi';

const { Title } = Typography;

interface NewsListProps {
  activeCategory: string;
}

const NewsList: React.FC<NewsListProps> = ({ activeCategory }) => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetchNews();
  }, [activeCategory]);

  const fetchNews = async () => {
    try {
      const articles = await getNews({ category: activeCategory });
      setNews(articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>News</Title>
      <Row gutter={[16, 16]}>
        {news.map((item) => (
          <Col key={item.url} xs={24} sm={12} md={8} lg={6}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={item.urlToImage} alt={item.title} style={{ width: '100%', height: 'auto' }} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsList;
