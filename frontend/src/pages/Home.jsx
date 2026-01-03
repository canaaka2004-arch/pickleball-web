import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ language }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrolled = window.scrollY;
        const progress = Math.min(scrolled / heroHeight, 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    vi: {
      hero: {
        logoText: 'PETANQUE VIETNAM'
      },
      intro: {
        title: 'GIẢI PETANQUE QUỐC GIA 2024',
        titleEn: 'National Petanque Championship 2024',
        description: [
          'Giải đấu Petanque uy tín nhất Việt Nam, quy tụ các tay chơi xuất sắc từ khắp các tỉnh thành. Đây là sân chơi lý tưởng để thể hiện kỹ năng, giao lưu học hỏi và tôn vinh tinh thần thể thao.',
          'Với hệ thống tổ chức chuyên nghiệp, sân thi đấu đạt chuẩn quốc tế và giải thưởng hấp dẫn, giải đấu hứa hẹn mang đến những trận cầu đỉnh cao và trải nghiệm khó quên cho người chơi cũng như khán giả.',
          'Tham gia ngay để trở thành một phần của cộng đồng Petanque Việt Nam đang phát triển mạnh mẽ.'
        ],
        cta: 'Đăng Ký Tham Gia'
      }
    },
    en: {
      hero: {
        logoText: 'PETANQUE VIETNAM'
      },
      intro: {
        title: 'NATIONAL PETANQUE CHAMPIONSHIP 2024',
        titleEn: 'National Petanque Championship 2024',
        description: [
          'The most prestigious Petanque tournament in Vietnam, bringing together elite players from across the country. This is the ideal platform to showcase skills, exchange experiences, and honor the spirit of sportsmanship.',
          'With professional organization, international-standard courts, and attractive prizes, the tournament promises to deliver top-tier matches and unforgettable experiences for both players and spectators.',
          'Join us now to become part of Vietnam\'s thriving Petanque community.'
        ],
        cta: 'Register Now'
      }
    }
  };

  const t = content[language];

  // Calculate opacities for smooth transitions
  const heroOpacity = 1 - scrollProgress;
  const logoAOpacity = 1 - scrollProgress * 2; // Fades out faster
  const logoBOpacity = Math.max(0, (scrollProgress - 0.3) * 2); // Fades in later
  const introOpacity = Math.max(0, (scrollProgress - 0.4) * 2);
  const introTransform = `translateY(${(1 - scrollProgress) * 50}px)`;

  return (
    <div className="rr-home">
      {/* Hero Section - State 1 */}
      <section 
        ref={heroRef}
        className="rr-hero" 
        style={{
          opacity: heroOpacity,
          transform: `scale(${1 + scrollProgress * 0.1})`
        }}
      >
        <div className="rr-hero-bg">
          {/* Background image will be set via CSS */}
        </div>
        
        {/* Logo A - Main Hero Logo */}
        <div 
          className="rr-hero-logo-a"
          style={{ opacity: logoAOpacity }}
        >
          <h1 className="rr-hero-brand">{t.hero.logoText}</h1>
        </div>
      </section>

      {/* Logo B - Appears during transition */}
      <div 
        className="rr-logo-b-container"
        style={{ opacity: logoBOpacity }}
      >
        <div className="rr-logo-b">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.5" />
            <text x="30" y="38" textAnchor="middle" fill="currentColor" fontSize="16" fontFamily="Playfair Display">
              PV
            </text>
          </svg>
        </div>
      </div>

      {/* Intro Section - State 2 */}
      <section 
        className="rr-intro"
        style={{
          opacity: introOpacity,
          transform: introTransform
        }}
      >
        <div className="rr-intro-content">
          {/* Bilingual Title */}
          <div className="rr-intro-header">
            <h2 className="rr-intro-title">{t.intro.title}</h2>
            <p className="rr-intro-subtitle">{t.intro.titleEn}</p>
          </div>

          {/* Editorial Paragraphs */}
          <div className="rr-intro-body">
            {t.intro.description.map((paragraph, index) => (
              <p key={index} className="rr-intro-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="rr-intro-cta">
            <Link to="/tournament" className="rr-btn-primary">
              {t.intro.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="rr-details">
        <div className="rr-details-content">
          <div className="rr-detail-card">
            <h3 className="rr-detail-title">
              {language === 'vi' ? 'THÔNG TIN GIẢI ĐẤU' : 'TOURNAMENT INFORMATION'}
            </h3>
            <p className="rr-detail-subtitle">
              {language === 'vi' ? 'Tournament Details' : 'Tournament Details'}
            </p>
            <div className="rr-detail-items">
              <div className="rr-detail-item">
                <span className="rr-detail-label">
                  {language === 'vi' ? 'Thời gian' : 'Date'}
                </span>
                <span className="rr-detail-value">
                  {language === 'vi' ? '01-05 Tháng 6, 2024' : 'June 01-05, 2024'}
                </span>
              </div>
              <div className="rr-detail-item">
                <span className="rr-detail-label">
                  {language === 'vi' ? 'Địa điểm' : 'Location'}
                </span>
                <span className="rr-detail-value">
                  {language === 'vi' ? 'Trung tâm Thể thao Quốc gia, Hà Nội' : 'National Sports Center, Hanoi'}
                </span>
              </div>
              <div className="rr-detail-item">
                <span className="rr-detail-label">
                  {language === 'vi' ? 'Lệ phí' : 'Entry Fee'}
                </span>
                <span className="rr-detail-value">
                  {language === 'vi' ? '500.000 VNĐ / đội' : '500,000 VND / team'}
                </span>
              </div>
              <div className="rr-detail-item">
                <span className="rr-detail-label">
                  {language === 'vi' ? 'Giải thưởng' : 'Prize Pool'}
                </span>
                <span className="rr-detail-value">
                  200.000.000 VNĐ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="rr-cta-section">
        <div className="rr-cta-content">
          <h2 className="rr-cta-title">
            {language === 'vi' ? 'SẴN SÀNG THAM GIA?' : 'READY TO PARTICIPATE?'}
          </h2>
          <p className="rr-cta-subtitle">
            {language === 'vi' ? 'Ready to Participate?' : 'Ready to Participate?'}
          </p>
          <p className="rr-cta-text">
            {language === 'vi' 
              ? 'Đăng ký ngay để nhận thông tin chi tiết và bảo đảm suất tham gia giải đấu.'
              : 'Register now to receive detailed information and secure your spot in the tournament.'
            }
          </p>
          <Link to="/contact" className="rr-btn-cta">
            {language === 'vi' ? 'Liên Hệ Ngay' : 'Contact Now'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;