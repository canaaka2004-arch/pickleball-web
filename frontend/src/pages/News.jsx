import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { news } from '../mockData';

const News = ({ language }) => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const content = {
    vi: {
      title: 'Tin Tức & Sự Kiện',
      subtitle: 'Cập nhật tin tức mới nhất về Pickleball Việt Nam',
      filter: 'Lọc theo danh mục',
      all: 'Tất cả',
      search: 'Tìm kiếm tin tức...',
      readMore: 'Đọc Thêm'
    },
    en: {
      title: 'News & Events',
      subtitle: 'Latest updates about Pickleball Vietnam',
      filter: 'Filter by category',
      all: 'All',
      search: 'Search news...',
      readMore: 'Read More'
    }
  };

  const t = content[language];

  const categories = [...new Set(news.map(n => language === 'vi' ? n.category : n.categoryEn))];

  const filteredNews = news.filter(article => {
    const categoryMatch = filterCategory === 'all' || (language === 'vi' ? article.category : article.categoryEn) === filterCategory;
    const searchMatch = searchTerm === '' || 
      (language === 'vi' ? article.title : article.titleEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (language === 'vi' ? article.excerpt : article.excerptEn).toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="news-page">
      <div className="page-hero">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-subtitle">{t.subtitle}</p>
      </div>

      <div className="page-container">
        {/* Filters */}
        <div className="filter-bar">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <Tag size={20} />
            <label>{t.filter}:</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">{t.all}</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* News Grid */}
        <div className="news-list">
          {filteredNews.map((article) => (
            <div key={article.id} className="news-card-large">
              <div className="news-image-large">
                <img src={article.image} alt={language === 'vi' ? article.title : article.titleEn} />
                <span className="category-badge">
                  {language === 'vi' ? article.category : article.categoryEn}
                </span>
              </div>
              <div className="news-content-large">
                <div className="news-meta">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US')}</span>
                  <span className="separator">•</span>
                  <span>{article.author}</span>
                </div>
                <h3 className="news-title-large">{language === 'vi' ? article.title : article.titleEn}</h3>
                <p className="news-excerpt-large">{language === 'vi' ? article.excerpt : article.excerptEn}</p>
                <Link to={`/news/${article.id}`} className="read-more-button">
                  {t.readMore} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
