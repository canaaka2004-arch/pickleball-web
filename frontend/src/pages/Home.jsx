import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
 

const Home = ({ language }) => { 
  const navigate = useNavigate();
  const [scrolly,setScrolly]= useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const isSwipingRef = useRef(false);

  const SLIDE_COUNT = 2;
  const AUTOPLAY_MS = 5000;     // đang là 5 giây (đổi số ở đây)
  const SWIPE_THRESHOLD = 50;   // vuốt hơn 50px mới chuyển



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
        title: 'COMING SOON...',
        subtitle: 'COMING SOON...',
        
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
        title: 'COMING SOON...',
        subtitle: 'COMING SOON...',
        
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
  const mq = window.matchMedia("(max-width: 768px)");

  const apply = () => setIsMobile(mq.matches);
  apply(); // chạy lần đầu

  // Safari cũ
  if (mq.addEventListener) {
    mq.addEventListener("change", apply);
  } else {
    mq.addListener(apply);
  }

  return () => {
    if (mq.removeEventListener) {
      mq.removeEventListener("change", apply);
    } else {
      mq.removeListener(apply);
    }
  };
}, []);

 useEffect(() => {
  const onScroll = () => setScrolly(window.scrollY || 0);

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // set giá trị lần đầu

  return () => window.removeEventListener("scroll", onScroll);
}, []);

const startAutoplay = () => {
  if (intervalRef.current) clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % SLIDE_COUNT);
  }, AUTOPLAY_MS);
};

useEffect(() => {
  startAutoplay();
  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
}, []);

const goTo = (idx) => {
  const nextIdx = (idx + SLIDE_COUNT) % SLIDE_COUNT;
  setHeroIndex(nextIdx);
  startAutoplay();
};

const next = () => {
  setHeroIndex((p) => (p + 1) % SLIDE_COUNT);
  startAutoplay();
};

const prev = () => {
  setHeroIndex((p) => (p - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  startAutoplay();
};

const onTouchStart = (e) => {
  touchStartXRef.current = e.touches[0].clientX;
  touchDeltaXRef.current = 0;
  isSwipingRef.current = true;
};

const onTouchMove = (e) => {
  if (!isSwipingRef.current) return;
  const x = e.touches[0].clientX;
  touchDeltaXRef.current = x - touchStartXRef.current;
};

const onTouchEnd = () => {
  if (!isSwipingRef.current) return;
  isSwipingRef.current = false;

  const dx = touchDeltaXRef.current;
  if (Math.abs(dx) < SWIPE_THRESHOLD) return;

  if (dx < 0) next();
  else prev();
};

const slide1 = isMobile ? "/MB_POST.jpg" : "/DESK_POST.jpg";
const slide2 = isMobile ? "/MB_POST_01.jpg" : "/DESK_POST1.jpg";

  return (
    <div className="home-page">

<section className="hero-visual hero-slider"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd} >
  <div className="hero-slider-track" style={{ transform: `translateX(-${heroIndex * 100}vw)` }}>
    <div
      className="hero-slider-slide"
      style={{
        backgroundImage: `
          linear-gradient(
    to bottom,
    rgba(0,0,0,0.15),
    rgba(0,0,0,0.45)
  ),
          url("${slide1}")
        `
      }}
    />
    <div
      className="hero-slider-slide"
      style={{
        backgroundImage: `
          linear-gradient(
    to bottom,
    rgba(0,0,0,0.15),
    rgba(0,0,0,0.45)
  ),
          url("${slide2}")
        `
      }}
    />
  </div>

  <div className="hero-visual-center">
    <h1 className="hero-visual-title"></h1>
  </div>

  <div className="hero-slider-dots" aria-label="Hero slider pagination">
  {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
    <button
      key={i}
      type="button"
      className={`dot ${heroIndex === i ? "active" : ""}`}
      onClick={() => goTo(i)}
      aria-label={`Go to slide ${i + 1}`}
      aria-current={heroIndex === i ? "true" : "false"}
    />
  ))}
</div>
</section>





      {/* Hero 2 - Tournament Introduction (Text Focus) */}
      <section className="hero-text fade-in-section">
  <div
    className="hero-text-bg"
    style={{
      backgroundImage: `
        linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92)),
        url("cuppickleball.png")
      `
    }}
  />
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
            

            

            
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
