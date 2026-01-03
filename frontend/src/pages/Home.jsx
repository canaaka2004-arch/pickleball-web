import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Home = ({ language }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: ''
  });

  const content = {
    vi: {
      hero2: {
        title: 'GIẢI PICKLEBALL MR. PHƯƠNG 2024',
        subtitle: 'Professional Pickleball Tournament 2024',
        intro: 'Giải đấu Pickleball chuyên nghiệp do Mr. Phương tổ chức - Sân chơi đẳng cấp dành cho các tay chơi Pickleball xuất sắc tại Việt Nam.',
        about: 'Với mục tiêu xây dựng một cộng đồng Pickleball chuyên nghiệp và năng động, giải đấu mang đến cơ hội giao lưu, học hỏi và thể hiện kỹ năng cho các vận động viên từ mọi trình độ.',
        format: 'Thể thức thi đấu: Đơn nam, đơn nữ và đôi nam nữ theo hệ thống loại trực tiếp. Tất cả trận đấu tuân thủ quy định chuẩn quốc tế của Pickleball.',
        prize: 'Tổng giải thưởng: 50.000.000 VNĐ với các phần thưởng hấp dẫn cho top 3 mỗi nội dung thi đấu.',
        registration: 'Đăng ký ngay hôm nay để bảo đảm suất tham gia. Số lượng vận động viên có giới hạn.',
        btnRegister: 'Đăng Ký Tham Gia'
      },
      hero3: {
        title: 'KIẾN THỨC PICKLEBALL',
        subtitle: 'Pickleball Knowledge',
        howToPlay: 'Cách chơi: Pickleball là môn thể thao kết hợp giữa quần vợt, cầu lông và bóng bàn. Chơi trên sân nhỏ với vợt gỗ và bóng nhựa có lỗ.',
        scoring: 'Cách tính điểm: Trận đấu thi đấu đến 11 điểm (phải thắng cách biệt 2 điểm). Chỉ đội giao bóng mới được tính điểm.',
        paddle: 'Cách cầm vợt: Cầm vợt như kiểu bắt tay, giữ chặt nhưng thoải mái, cổ tay linh hoạt để điều khiển bóng tốt hơn.'
      },
      form: {
        title: 'ĐĂNG KÝ THAM GIA',
        name: 'Họ và tên',
        namePlaceholder: 'Nhập họ và tên đầy đủ',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Số điện thoại',
        phonePlaceholder: '+84 xxx xxx xxx',
        level: 'Trình độ',
        levelPlaceholder: 'Chọn trình độ',
        levels: {
          newbie: 'Newbie',
          pro: 'Pro',
          master: 'Master'
        },
        submit: 'Gửi Đăng Ký',
        cancel: 'Hủy',
        required: 'Vui lòng điền đầy đủ thông tin',
        success: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.'
      }
    },
    en: {
      hero2: {
        title: 'MR. PHƯƠNG PICKLEBALL TOURNAMENT 2024',
        subtitle: 'Professional Pickleball Tournament 2024',
        intro: 'Professional Pickleball Tournament organized by Mr. Phương - A premium playground for outstanding Pickleball players in Vietnam.',
        about: 'With the goal of building a professional and dynamic Pickleball community, the tournament offers opportunities for exchange, learning, and skill demonstration for athletes of all levels.',
        format: 'Competition format: Men\'s singles, women\'s singles, and mixed doubles in knockout system. All matches follow international Pickleball standards.',
        prize: 'Total prize pool: 50,000,000 VND with attractive rewards for top 3 in each category.',
        registration: 'Register today to secure your spot. Limited number of participants.',
        btnRegister: 'Register Now'
      },
      hero3: {
        title: 'PICKLEBALL KNOWLEDGE',
        subtitle: 'Pickleball Knowledge',
        howToPlay: 'How to play: Pickleball is a sport combining tennis, badminton, and table tennis. Played on a small court with wooden paddles and perforated plastic balls.',
        scoring: 'Scoring: Games are played to 11 points (must win by 2). Only the serving team can score.',
        paddle: 'Paddle grip: Hold the paddle like a handshake, firm but comfortable, with flexible wrist for better ball control.'
      },
      form: {
        title: 'REGISTER NOW',
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Phone Number',
        phonePlaceholder: '+84 xxx xxx xxx',
        level: 'Skill Level',
        levelPlaceholder: 'Select your level',
        levels: {
          newbie: 'Newbie',
          pro: 'Pro',
          master: 'Master'
        },
        submit: 'Submit Registration',
        cancel: 'Cancel',
        required: 'Please fill in all fields',
        success: 'Registration successful! We will contact you soon.'
      }
    }
  };

  const t = content[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.level) {
      alert(t.form.required);
      return;
    }

    // Mock submission
    console.log('Registration submitted:', formData);
    alert(t.form.success);
    
    // Reset and close
    setFormData({ name: '', email: '', phone: '', level: '' });
    setShowRegistrationForm(false);
  };

  useEffect(() => {
    // Smooth fade-in animation on scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero 1 - Visual Impact Only */}
      <section className="hero-visual">
        <div className="hero-visual-bg" />
      </section>

      {/* Hero 2 - Tournament Introduction (Text Focus) */}
      <section className="hero-text fade-in-section">
        <div className="hero-text-content">
          <div className="bilingual-heading">
            <h1 className="hero-text-title">{t.hero2.title}</h1>
            <p className="hero-text-subtitle">{t.hero2.subtitle}</p>
          </div>

          <div className="hero-text-body">
            <p className="hero-text-paragraph">{t.hero2.intro}</p>
            <p className="hero-text-paragraph">{t.hero2.about}</p>
            
            <div className="tournament-details">
              <h3 className="detail-heading">
                {language === 'vi' ? 'Thể Thức & Giải Thưởng' : 'Format & Prizes'}
              </h3>
              <p className="hero-text-paragraph">{t.hero2.format}</p>
              <p className="hero-text-paragraph highlight">{t.hero2.prize}</p>
            </div>

            <p className="hero-text-paragraph">{t.hero2.registration}</p>

            <div className="hero-text-cta">
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="rr-btn-cta"
              >
                {t.hero2.btnRegister}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 3 - Pickleball Knowledge */}
      <section className="hero-knowledge fade-in-section">
        <div className="hero-knowledge-bg" />
        <div className="hero-knowledge-content">
          <div className="bilingual-heading">
            <h2 className="hero-knowledge-title">{t.hero3.title}</h2>
            <p className="hero-knowledge-subtitle">{t.hero3.subtitle}</p>
          </div>

          <div className="knowledge-grid">
            <div className="knowledge-item">
              <h4 className="knowledge-heading">
                {language === 'vi' ? 'Cách Chơi' : 'How To Play'}
              </h4>
              <p className="knowledge-text">{t.hero3.howToPlay}</p>
            </div>

            <div className="knowledge-item">
              <h4 className="knowledge-heading">
                {language === 'vi' ? 'Tính Điểm' : 'Scoring'}
              </h4>
              <p className="knowledge-text">{t.hero3.scoring}</p>
            </div>

            <div className="knowledge-item">
              <h4 className="knowledge-heading">
                {language === 'vi' ? 'Cầm Vợt' : 'Paddle Grip'}
              </h4>
              <p className="knowledge-text">{t.hero3.paddle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <>
          <div className="modal-overlay" onClick={() => setShowRegistrationForm(false)} />
          <div className="registration-modal">
            <button 
              className="modal-close"
              onClick={() => setShowRegistrationForm(false)}
              aria-label="Close"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <h2 className="modal-title">{t.form.title}</h2>

            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label htmlFor="name">{t.form.name} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.form.namePlaceholder}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.form.email} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.form.emailPlaceholder}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t.form.phone} *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.form.phonePlaceholder}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="level">{t.form.level} *</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">{t.form.levelPlaceholder}</option>
                  <option value="newbie">{t.form.levels.newbie}</option>
                  <option value="pro">{t.form.levels.pro}</option>
                  <option value="master">{t.form.levels.master}</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="rr-btn-primary">
                  {t.form.submit}
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowRegistrationForm(false)}
                  className="rr-btn-secondary"
                >
                  {t.form.cancel}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;