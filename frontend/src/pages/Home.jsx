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
        // Smoother, more cinematic progress calculation
        const progress = Math.min(Math.pow(scrolled / (heroHeight * 0.8), 1.2), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    vi: {
      hero: {
        logoText: 'Pickleball VIETNAM'
      },
      intro: {
        title: 'GIẢI Pickleball QUỐC GIA 2024',
        titleEn: 'National Pickle ball Championship 2024',
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

  // Calculate opacities for smooth cinematic transitions
  const heroOpacity = Math.pow(1 - scrollProgress, 1.5);
  const logoAOpacity = Math.pow(1 - scrollProgress * 1.5, 2); // Fades out faster with ease
  const logoBOpacity = Math.max(0, Math.pow((scrollProgress - 0.25) * 1.8, 1.5)); // Fades in smoothly
  const introOpacity = Math.max(0, Math.pow((scrollProgress - 0.35) * 1.5, 1.2));
  const introTransform = `translateY(${Math.max(0, (1 - scrollProgress) * 60)}px)`;

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
        
        {/* Logo A - Main Hero Logo (SVG) */}
        <div 
          className="rr-hero-logo-a"
          style={{ opacity: logoAOpacity }}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_a3c89baf-2eec-47d4-b0d2-c1f4159b9223/artifacts/2raka02o_PP%20tr%E1%BA%AFng.svg"
            alt="Petanque Vietnam Logo"
            className="rr-hero-logo-svg"
            onError={(e) => {
              console.error('Hero logo failed to load');
              e.target.style.display = 'block';
            }}
          />
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

      {/* Additional Content Section with Image */}
      <section className="rr-details">
        <div className="rr-details-content">
          <div className="rr-detail-card">
            <h3 className="rr-detail-title">
              {language === 'vi' ? 'THÔNG TIN GIẢI ĐẤU' : 'TOURNAMENT INFORMATION'}
            </h3>
            <p className="rr-detail-subtitle">
              {language === 'vi' ? 'Tournament Details' : 'Tournament Details'}
            </p>
            
            {/* Supporting Pickleball Image */}
            <div className="rr-detail-image">
              <img 
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80"
                alt="Pickleball Tournament"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '0',
                  marginBottom: 'var(--spacing-xl)',
                  opacity: 0.9
                }}
              />
            </div>
            
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
      <section className="rr-experience-section">
        <div className="rr-experience-content">
          <div className="rr-experience-image">
            <img 
              src="https://images.unsplash.com/photo-1603537258636-ecfc8525f86f?w=1200&q=80"
              alt="Pickleball Community"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                opacity: 0.8
              }}
            />
          </div>
          <div className="rr-experience-text">
            <h3 className="rr-detail-title" style={{ marginBottom: 'var(--spacing-medium)' }}>
              {language === 'vi' ? 'TRẢI NGHIỆM CỘNG ĐỒNG' : 'COMMUNITY EXPERIENCE'}
            </h3>
            <p className="rr-detail-subtitle" style={{ marginBottom: 'var(--spacing-large)' }}>
              {language === 'vi' ? 'Community Experience' : 'Community Experience'}
            </p>
            <p className="rr-intro-paragraph">
              {language === 'vi'
                ? 'Tham gia cộng đồng Pickleball/Petanque sôi động với các giải đấu chuyên nghiệp, giao lưu văn hóa thể thao và kết nối với những người đam mê cùng chí hướng.'
                : 'Join our vibrant Pickleball/Petanque community with professional tournaments, sports cultural exchange, and connections with like-minded enthusiasts.'
              }
            </p>
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