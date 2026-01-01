import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users, ArrowRight } from 'lucide-react';
import { tournaments, news, stats } from '../mockData';

const Home = ({ language }) => {
  const content = {
    vi: {
      hero: {
        title: 'Cộng Đồng Pickleball Việt Nam',
        subtitle: 'Kết nối đam mê - Phát triển tài năng - Tôn vinh thể thao',
        cta1: 'Xem Giải Đấu',
        cta2: 'Tham Gia Ngay'
      },
      stats: {
        players: 'Vận Động Viên',
        tournaments: 'Giải Đấu',
        provinces: 'Tỉnh/Thành'
      },
      upcoming: {
        title: 'Giải Đấu Sắp Diễn Ra',
        viewAll: 'Xem Tất Cả',
        register: 'Đăng Ký',
        participants: 'người tham gia'
      },
      news: {
        title: 'Tin Tức Mới Nhất',
        readMore: 'Đọc Thêm',
        viewAll: 'Xem Tất Cả Tin Tức'
      },
      cta: {
        title: 'Sẵn Sàng Tham Gia Cộng Đồng?',
        subtitle: 'Đăng ký ngay để nhận thông tin về các giải đấu và sự kiện mới nhất',
        button: 'Liên Hệ Ngay'
      }
    },
    en: {
      hero: {
        title: 'Vietnam Pickleball Community',
        subtitle: 'Connect Passion - Develop Talent - Honor Sports',
        cta1: 'View Tournaments',
        cta2: 'Join Now'
      },
      stats: {
        players: 'Athletes',
        tournaments: 'Tournaments',
        provinces: 'Provinces'
      },
      upcoming: {
        title: 'Upcoming Tournaments',
        viewAll: 'View All',
        register: 'Register',
        participants: 'participants'
      },
      news: {
        title: 'Latest News',
        readMore: 'Read More',
        viewAll: 'View All News'
      },
      cta: {
        title: 'Ready to Join the Community?',
        subtitle: 'Register now to receive information about the latest tournaments and events',
        button: 'Contact Now'
      }
    }
  };

  const t = content[language];
  const upcomingTournaments = tournaments.filter(t => t.status === 'upcoming' || t.status === 'registration').slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
  className="hero-section"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/57/28/d8/5728d8b75ddfebe5a36cad37a88ade2b.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title">{t.hero.title}</h1>
      <p className="hero-subtitle">{t.hero.subtitle}</p>

      <div className="hero-buttons">
        <Link to="/tournaments" className="btn-primary">
          {t.hero.cta1}
        </Link>
        <Link to="/contact" className="btn-secondary">
          {t.hero.cta2}
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <Users className="stat-icon" size={40} />
            <div className="stat-number">{stats.totalPlayers.toLocaleString()}</div>
            <div className="stat-label">{t.stats.players}</div>
          </div>
          <div className="stat-card">
            <Trophy className="stat-icon" size={40} />
            <div className="stat-number">{stats.totalTournaments}</div>
            <div className="stat-label">{t.stats.tournaments}</div>
          </div>
          <div className="stat-card">
            <Calendar className="stat-icon" size={40} />
            <div className="stat-number">{stats.provinces}</div>
            <div className="stat-label">{t.stats.provinces}</div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">{t.upcoming.title}</h2>
          <Link to="/tournaments" className="view-all-link">
            {t.upcoming.viewAll} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="tournament-grid">
          {upcomingTournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card">
              <div className="tournament-image">
                <img src={tournament.image} alt={language === 'vi' ? tournament.name : tournament.nameEn} />
                <span className={`status-badge ${tournament.status}`}>
                  {tournament.status === 'upcoming' ? (language === 'vi' ? 'Sắp diễn ra' : 'Upcoming') : (language === 'vi' ? 'Đang mở' : 'Open')}
                </span>
              </div>
              <div className="tournament-content">
                <h3 className="tournament-title">{language === 'vi' ? tournament.name : tournament.nameEn}</h3>
                <div className="tournament-info">
                  <div className="info-item">
                    <Calendar size={16} />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="info-item">
                    <Users size={16} />
                    <span>{tournament.participants} {t.upcoming.participants}</span>
                  </div>
                </div>
                <Link to={`/tournaments/${tournament.id}`} className="btn-primary btn-small">
                  {t.upcoming.register}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="section-container news-section">
        <div className="section-header">
          <h2 className="section-title">{t.news.title}</h2>
          <Link to="/news" className="view-all-link">
            {t.news.viewAll} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="news-grid">
          {latestNews.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image">
                <img src={article.image} alt={language === 'vi' ? article.title : article.titleEn} />
              </div>
              <div className="news-content">
                <span className="news-category">{language === 'vi' ? article.category : article.categoryEn}</span>
                <h3 className="news-title">{language === 'vi' ? article.title : article.titleEn}</h3>
                <p className="news-excerpt">{language === 'vi' ? article.excerpt : article.excerptEn}</p>
                <div className="news-footer">
                  <span className="news-date">{new Date(article.date).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US')}</span>
                  <Link to={`/news/${article.id}`} className="read-more-link">
                    {t.news.readMore} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-subtitle">{t.cta.subtitle}</p>
          <Link to="/contact" className="btn-cta">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
