import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
 

const Home = ({ language }) => { 
  const navigate = useNavigate();
  const [scrolly,setScrolly]= useState(0);



  const content = {
    vi: {
      hero2: {
        title: 'MR PHƯƠNG PICKLEBALL OPEN CUP',
        btnRegister: 'Đăng Ký Tham Gia'
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
      },
      hero3: {
        title: 'KIẾN THỨC PICKLEBALL',
        subtitle: 'Pickleball Knowledge',
        howToPlay: 'Cách chơi: Pickleball là môn thể thao kết hợp giữa quần vợt, cầu lông và bóng bàn. Chơi trên sân nhỏ với vợt gỗ và bóng nhựa có lỗ.',
        scoring: 'Cách tính điểm: Trận đấu thi đấu đến 11 điểm (phải thắng cách biệt 2 điểm). Chỉ đội giao bóng mới được tính điểm.',
        paddle: 'Cách cầm vợt: Cầm vợt như kiểu bắt tay, giữ chặt nhưng thoải mái, cổ tay linh hoạt để điều khiển bóng tốt hơn.'
      },
      
    },
    en: {
      hero2: {
        title: 'MR. PHƯƠNG PICKLEBALL TOURNAMENT 2024',
        btnRegister: 'Register Now'
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
      },
      hero3: {
        title: 'PICKLEBALL KNOWLEDGE',
        subtitle: 'Pickleball Knowledge',
        howToPlay: 'How to play: Pickleball is a sport combining tennis, badminton, and table tennis. Played on a small court with wooden paddles and perforated plastic balls.',
        scoring: 'Scoring: Games are played to 11 points (must win by 2). Only the serving team can score.',
        paddle: 'Paddle grip: Hold the paddle like a handshake, firm but comfortable, with flexible wrist for better ball control.'
      },
      
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
 useEffect(() => {
  const onScroll = () => setScrolly(window.scrollY || 0);

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // set giá trị lần đầu

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <div className="home-page">
      {/* Hero 1 - Cinematic Visual Only */}
      <section className="hero-visual">
        <div
  className="hero-visual-bg"
 style={{
  backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.35),
      rgba(0,0,0,0.85)
    ),
    url("https://images.pexels.com/photos/6370120/pexels-photo-6370120.jpeg")
  `,
  transform: `scale(${1.03 + Math.min(scrollY / 4000, 0.05)})`
}}
/>
        <div className="hero-visual-center">
  <h1 className="hero-visual-title"></h1>
</div>
      </section>

      {/* Hero 2 - Tournament Introduction (Text Focus) */}
      <section className="hero-text fade-in-section">
        <div className="hero-text-content">
          <div className="bilingual-heading">
            <h1 className="hero-text-title">
  MR PHƯƠNG PICKLEBALL <br />
  <span className="hero-text-subtitle-strong">OPEN CUP</span>
</h1>
            <p className="hero-text-subtitle">{t.hero2.subtitle}</p>
          </div>

          <div className="hero-text-body">
            <p className="hero-text-paragraph">{t.hero2.intro}</p>
            <p className="hero-text-paragraph">{t.hero2.about}</p>
            
            <div className="tournament-details">
              
              <p className="hero-text-paragraph">{t.hero2.format}</p>
              <p className="hero-text-paragraph highlight">{t.hero2.prize}</p>
            </div>

            <p className="hero-text-paragraph">{t.hero2.registration}</p>

            <div className="hero-text-cta">
              <button
  onClick={() => navigate("/register")}
  className="rr-btn-cta join-btn"
>
  THAM GIA
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


    </div>
  );
};

export default Home;
