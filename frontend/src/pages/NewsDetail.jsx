import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, User, ArrowLeft } from 'lucide-react';
import { news } from '../mockData';

const NewsDetail = ({ language }) => {
  const { id } = useParams();
  const article = news.find(n => n.id === parseInt(id));

  const content = {
    vi: {
      back: 'Quay Lại Tin Tức',
      relatedNews: 'Tin Tức Liên Quan'
    },
    en: {
      back: 'Back to News',
      relatedNews: 'Related News'
    }
  };

  const t = content[language];

  if (!article) {
    return (
      <div className="page-container">
        <h2>Article not found</h2>
        <Link to="/news" className="btn-primary">Back to News</Link>
      </div>
    );
  }

  const relatedArticles = news
    .filter(n => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  return (
    <div className="news-detail-page">
      <div className="detail-container">
        <Link to="/news" className="back-link">
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <article className="article-content">
          <div className="article-header">
            <span className="category-badge-large">
              {language === 'vi' ? article.category : article.categoryEn}
            </span>
            <h1 className="article-title">{language === 'vi' ? article.title : article.titleEn}</h1>
            
            <div className="article-meta">
              <div className="meta-item">
                <Calendar size={18} />
                <span>{new Date(article.date).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="meta-item">
                <User size={18} />
                <span>{article.author}</span>
              </div>
            </div>
          </div>

          <div className="article-image">
            <img src={article.image} alt={language === 'vi' ? article.title : article.titleEn} />
          </div>

          <div className="article-body">
            <p className="article-excerpt">{language === 'vi' ? article.excerpt : article.excerptEn}</p>
            <div className="article-text">
              <p>
                {language === 'vi' 
                  ? `Giải đấu petanque vừa qua đã thu hút sự quan tâm lớn từ cộng đồng thể thao Việt Nam. Với sự tham gia của hàng trăm vận động viên từ khắp các tỉnh thành, sự kiện này không chỉ là một cuộc tranh tài mà còn là dịp để các tay chơi giao lưu, học hỏi kinh nghiệm từ nhau.`
                  : `The recent petanque tournament attracted great attention from the Vietnamese sports community. With the participation of hundreds of athletes from provinces across the country, this event was not only a competition but also an opportunity for players to exchange and learn from each other.`
                }
              </p>
              <p>
                {language === 'vi'
                  ? `Các trận đấu diễn ra trong không khí sôi động và đầy cạnh tranh. Khán giả đã được chứng kiến những pha bóng đẹp mắt, những chiến thuật thông minh và tinh thần fair-play cao từ các vận động viên. Đây là minh chứng cho sự phát triển mạnh mẽ của bộ môn Petanque tại Việt Nam.`
                  : `The matches took place in a vibrant and competitive atmosphere. The audience witnessed beautiful plays, smart tactics, and high fair-play spirit from the athletes. This is evidence of the strong development of Petanque in Vietnam.`
                }
              </p>
              <p>
                {language === 'vi'
                  ? `Ban tổ chức đã chuẩn bị chu đáo từ sân thi đấu, thiết bị cho đến các dịch vụ hỗ trợ vận động viên. Điều này góp phần tạo nên một giải đấu chuyên nghiệp, đáp ứng tiêu chuẩn quốc tế và mang lại trải nghiệm tốt nhất cho người tham gia.`
                  : `The organizers prepared thoroughly from the competition venue, equipment to athlete support services. This contributed to creating a professional tournament that meets international standards and provides the best experience for participants.`
                }
              </p>
            </div>
          </div>
        </article>

        {/* Related News */}
        {relatedArticles.length > 0 && (
          <div className="related-news-section">
            <h2 className="section-title">{t.relatedNews}</h2>
            <div className="related-news-grid">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/news/${related.id}`}
                  className="related-news-card"
                >
                  <div className="related-news-image">
                    <img src={related.image} alt={language === 'vi' ? related.title : related.titleEn} />
                  </div>
                  <div className="related-news-content">
                    <span className="news-category">{language === 'vi' ? related.category : related.categoryEn}</span>
                    <h4 className="related-news-title">{language === 'vi' ? related.title : related.titleEn}</h4>
                    <span className="news-date">
                      {new Date(related.date).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
