import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Trophy, ArrowLeft, Award } from 'lucide-react';
import { tournaments } from '../mockData';

const TournamentDetail = ({ language }) => {
  const { id } = useParams();
  const tournament = tournaments.find(t => t.id === parseInt(id));

  const content = {
    vi: {
      back: 'Quay Lại',
      register: 'Đăng Ký Tham Gia',
      details: 'Thông Tin Chi Tiết',
      date: 'Thời gian',
      location: 'Địa điểm',
      participants: 'Số lượng',
      prize: 'Giải thưởng',
      category: 'Hạng mục',
      status: 'Trạng thái',
      description: 'Mô Tả',
      rules: 'Thể Lệ',
      contact: 'Liên Hệ',
      descriptionText: 'Giải đấu Pickleball chuyên nghiệp thu hút các vận động viên hàng đầu từ khắp cả nước. Đây là sân chơi lý tưởng để các tay chơi thể hiện kỹ năng và giao lưu với cộng đồng.',
      rulesText: '- Tuân thủ luật chơi Pickleball quốc tế\n- Đăng ký trước hạn chót 2 tuần\n- Mang theo giấy tờ tùy thân khi thi đấu\n- Trang phục thể thao lịch sự',
      contactInfo: 'Email: EddiePhan@gmail.com\nĐiện thoại: É Lí Phú'
    },
    en: {
      back: 'Back',
      register: 'Register',
      details: 'Details',
      date: 'Date',
      location: 'Location',
      participants: 'Participants',
      prize: 'Prize Pool',
      category: 'Category',
      status: 'Status',
      description: 'Description',
      rules: 'Rules',
      contact: 'Contact',
      descriptionText: 'Professional Pickleball tournament attracting top athletes from across the country. This is an ideal platform for players to showcase their skills and connect with the community.',
      rulesText: '- Follow international Pickleballrules\n- Register before 2-week deadline\n- Bring ID documents during competition\n- Proper sports attire required',
      contactInfo: 'Email: EddiePhan@gmail.com\nPhone: É Lí Phú'
    }
  };

  const t = content[language];

  if (!tournament) {
    return (
      <div className="page-container">
        <h2>Tournament not found</h2>
        <Link to="/tournaments" className="btn-primary">Back to Tournaments</Link>
      </div>
    );
  }

  const getStatusText = (status) => {
    const statusMap = {
      vi: {
        upcoming: 'Sắp diễn ra',
        registration: 'Đang mở đăng ký',
        completed: 'Đã kết thúc'
      },
      en: {
        upcoming: 'Upcoming',
        registration: 'Registration Open',
        completed: 'Completed'
      }
    };
    return statusMap[language][status] || status;
  };

  return (
    <div className="tournament-detail-page">
      <div className="detail-container">
        <Link to="/tournaments" className="back-link">
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <div className="detail-hero">
          <div className="detail-image">
            <img src={tournament.image} alt={language === 'vi' ? tournament.name : tournament.nameEn} />
            <span className={`status-badge-large ${tournament.status}`}>
              {getStatusText(tournament.status)}
            </span>
          </div>

          <div className="detail-header">
            <span className="category-badge-large">
              {language === 'vi' ? tournament.category : tournament.categoryEn}
            </span>
            <h1 className="detail-title">{language === 'vi' ? tournament.name : tournament.nameEn}</h1>
            
            <div className="detail-info-grid">
              <div className="info-card">
                <Calendar className="info-icon" size={24} />
                <div>
                  <div className="info-label">{t.date}</div>
                  <div className="info-value">{tournament.date}</div>
                </div>
              </div>
              
              <div className="info-card">
                <MapPin className="info-icon" size={24} />
                <div>
                  <div className="info-label">{t.location}</div>
                  <div className="info-value">{language === 'vi' ? tournament.location : tournament.locationEn}</div>
                </div>
              </div>
              
              <div className="info-card">
                <Users className="info-icon" size={24} />
                <div>
                  <div className="info-label">{t.participants}</div>
                  <div className="info-value">{tournament.participants}</div>
                </div>
              </div>
              
              <div className="info-card">
                <Trophy className="info-icon" size={24} />
                <div>
                  <div className="info-label">{t.prize}</div>
                  <div className="info-value">{tournament.prize}</div>
                </div>
              </div>
            </div>

            {tournament.status !== 'completed' && (
              <button className="btn-cta">
                <Award size={20} />
                {t.register}
              </button>
            )}
          </div>
        </div>

        <div className="detail-content">
          <div className="content-section">
            <h2 className="section-title">{t.description}</h2>
            <p className="section-text">{t.descriptionText}</p>
          </div>

          <div className="content-section">
            <h2 className="section-title">{t.rules}</h2>
            <p className="section-text whitespace-pre-line">{t.rulesText}</p>
          </div>

          <div className="content-section">
            <h2 className="section-title">{t.contact}</h2>
            <p className="section-text whitespace-pre-line">{t.contactInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
