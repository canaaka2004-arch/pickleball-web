import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Trophy, Filter } from 'lucide-react';
import { tournaments } from '../mockData';

const Tournaments = ({ language }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const content = {
    vi: {
      title: 'Giải Đấu Pickleball',
      subtitle: 'Khám phá và đăng ký các giải đấu trên toàn quốc',
      filters: {
        all: 'Tất cả',
        upcoming: 'Sắp diễn ra',
        registration: 'Đang mở đăng ký',
        completed: 'Đã kết thúc',
        status: 'Trạng thái',
        category: 'Hạng mục'
      },
      details: 'Xem Chi Tiết',
      register: 'Đăng Ký Ngay',
      participants: 'người tham gia',
      prize: 'Giải thưởng'
    },
    en: {
      title: 'Pickleball Tournaments',
      subtitle: 'Discover and register for tournaments nationwide',
      filters: {
        all: 'All',
        upcoming: 'Upcoming',
        registration: 'Registration Open',
        completed: 'Completed',
        status: 'Status',
        category: 'Category'
      },
      details: 'View Details',
      register: 'Register Now',
      participants: 'participants',
      prize: 'Prize Pool'
    }
  };

  const t = content[language];

  const filteredTournaments = tournaments.filter(tournament => {
    const statusMatch = filterStatus === 'all' || tournament.status === filterStatus;
    const categoryMatch = filterCategory === 'all' || (language === 'vi' ? tournament.category : tournament.categoryEn) === filterCategory;
    return statusMatch && categoryMatch;
  });

  const categories = [...new Set(tournaments.map(t => language === 'vi' ? t.category : t.categoryEn))];

  const getStatusText = (status) => {
    const statusMap = {
      vi: {
        upcoming: 'Sắp diễn ra',
        registration: 'Đang mở',
        completed: 'Đã kết thúc'
      },
      en: {
        upcoming: 'Upcoming',
        registration: 'Open',
        completed: 'Completed'
      }
    };
    return statusMap[language][status] || status;
  };

  return (
    <div className="tournaments-page">
      <div className="page-hero">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-subtitle">{t.subtitle}</p>
      </div>

      <div className="page-container">
        {/* Filters */}
        <div className="filter-bar">
          <div className="filter-group">
            <Filter size={20} />
            <label>{t.filters.status}:</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">{t.filters.all}</option>
              <option value="upcoming">{t.filters.upcoming}</option>
              <option value="registration">{t.filters.registration}</option>
              <option value="completed">{t.filters.completed}</option>
            </select>
          </div>

          <div className="filter-group">
            <label>{t.filters.category}:</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">{t.filters.all}</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tournament Grid */}
        <div className="tournament-list">
          {filteredTournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card-large">
              <div className="tournament-image-large">
                <img src={tournament.image} alt={language === 'vi' ? tournament.name : tournament.nameEn} />
                <span className={`status-badge ${tournament.status}`}>
                  {getStatusText(tournament.status)}
                </span>
              </div>
              <div className="tournament-content-large">
                <div className="tournament-header">
                  <h3 className="tournament-title-large">{language === 'vi' ? tournament.name : tournament.nameEn}</h3>
                  <span className="category-badge">{language === 'vi' ? tournament.category : tournament.categoryEn}</span>
                </div>
                
                <div className="tournament-details">
                  <div className="detail-item">
                    <Calendar size={18} />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={18} />
                    <span>{language === 'vi' ? tournament.location : tournament.locationEn}</span>
                  </div>
                  <div className="detail-item">
                    <Users size={18} />
                    <span>{tournament.participants} {t.participants}</span>
                  </div>
                  <div className="detail-item">
                    <Trophy size={18} />
                    <span>{tournament.prize}</span>
                  </div>
                </div>

                <div className="tournament-actions">
                  <Link to={`/tournaments/${tournament.id}`} className="btn-secondary">
                    {t.details}
                  </Link>
                  {tournament.status !== 'completed' && (
                    <button className="btn-primary">
                      {t.register}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
