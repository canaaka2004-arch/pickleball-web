import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { getTranslations } from '../translations';

const Home = ({ language }) => { 
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const [slides, setSlides] = useState([]); 
  
  // Update cấu trúc biến để hứng thêm thuộc tính 'type'
  const [hero2Bg, setHero2Bg] = useState({ type: "image", desktop: "cuppickleball.png", mobile: "cuppickleball.png" });
  const [hero3Bg, setHero3Bg] = useState({ type: "image", desktop: "/net-bg.jpg", mobile: "/net-bg.jpg" }); 

  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);
  const t = getTranslations(language);
  const AUTOPLAY_MS = 5000;
  
  const API_URL = "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

  // Theo dõi thu phóng màn hình để ép Video tải lại bản Mobile/Desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?t=${new Date().getTime()}`);
        const result = await response.json();
        
        if (result.hero_slides && result.hero_slides.length > 0) {
          setSlides(result.hero_slides);
        } else {
          setSlides([
            { image_url: "/DESK_POST.jpg", title: "Match Point" },
            { image_url: "/DESK_POST1.jpg", title: "Championship" }
          ]);
        }

        if (result.static_heroes && result.static_heroes.length > 0) {
          const h2 = result.static_heroes.find(item => item.id === "hero2");
          if (h2 && h2.desktop_url) {
            setHero2Bg({ type: h2.type || 'image', desktop: h2.desktop_url, mobile: h2.mobile_url || h2.desktop_url });
          }
          
          const h3 = result.static_heroes.find(item => item.id === "hero3");
          if (h3 && h3.desktop_url) {
            setHero3Bg({ type: h3.type || 'image', desktop: h3.desktop_url, mobile: h3.mobile_url || h3.desktop_url });
          }
        }
      } catch (error) {
        console.error("Lỗi lấy dữ liệu slide:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setHeroIndex((prev) => (prev + 1) % slides.length);
      }, AUTOPLAY_MS);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [slides]);

  const goTo = (idx) => {
    setHeroIndex(idx);
    startAutoplay();
  };

  if (loading) return <div className="loading-screen">Loading...</div>;

  return (
    <div className="home-page">
      {/* ================= HERO 1 (Slider) ================= */}
      <section className="hero-visual hero-slider">
        <div className="hero-slider-track" style={{ transform: `translateX(-${heroIndex * 100}vw)`, width: `${slides.length * 100}vw` }}>
          {slides.map((slide, index) => {
            const slideId = `hero-slide-${index}`;
            const mobileImg = slide.mobile_image_url ? slide.mobile_image_url : slide.image_url;

            return (
              <div key={index} className="hero-slider-slide" id={slideId}>
                <style>
                  {`
                    #${slideId} {
                      background-color: #000;
                      background-image: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url("${slide.image_url}");
                      background-size: cover; background-position: center; background-repeat: no-repeat; width: 100vw;
                    }
                    @media (max-width: 768px) {
                      #${slideId} {
                        background-image: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url("${mobileImg}");
                        background-size: contain; background-position: top center;
                      }
                    }
                  `}
                </style>
                <div className="hero-visual-center">
                   <h1 className="hero-visual-title">{slide.title}</h1>
                   <p className="hero-visual-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero-slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${heroIndex === i ? "active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
      </section>

      {/* ================= HERO 2 (Tham gia) ================= */}
      <section className="hero-text fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .hero-text-content {
              display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important;
              gap: 30px !important; padding: 60px 20px !important; text-align: center !important; position: relative !important; z-index: 2 !important; min-height: 50vh !important;
            }
            .hero-text-title, .join-btn { position: relative !important; margin: 0 !important; transform: none !important; }
            .hero-2-dynamic-bg {
              background-image: linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92)), url("${hero2Bg.desktop}");
              background-size: cover; background-position: center;
            }
            @media (max-width: 768px) { .hero-2-dynamic-bg { background-image: linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92)), url("${hero2Bg.mobile}"); } }
          `}
        </style>

        {/* CÔNG TẮC VIDEO/ẢNH */}
        {hero2Bg.type === 'video' ? (
          <>
            <video 
              key={isMobile ? hero2Bg.mobile : hero2Bg.desktop} 
              autoPlay loop muted playsInline 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            >
              <source src={isMobile ? hero2Bg.mobile : hero2Bg.desktop} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
          </>
        ) : (
          <div className="hero-text-bg hero-2-dynamic-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        )}
        
        <div className="hero-text-content">
          <h1 className="hero-text-title">
            {t.home.hero2.title} <br />
            <span className="hero-text-subtitle-strong">{t.home.hero2.subtitle}</span>
          </h1>
          <button onClick={() => navigate("/register")} className="rr-btn-cta join-btn">
            {t.home.hero2.btnRegister}
          </button>
        </div>
      </section>

      {/* ================= HERO 3 (Kiến thức) ================= */}
      <section className="hero-text fade-in-section" style={{ position: 'relative', overflow: 'hidden', marginTop: '5px' }}>
        <style>
          {`
            .hero-3-dynamic-bg {
              background-image: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url("${hero3Bg.desktop}");
              background-size: cover; background-position: center;
            }
            @media (max-width: 768px) { .hero-3-dynamic-bg { background-image: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url("${hero3Bg.mobile}"); } }
          `}
        </style>

        {/* CÔNG TẮC VIDEO/ẢNH */}
        {hero3Bg.type === 'video' ? (
          <>
            <video 
              key={isMobile ? hero3Bg.mobile : hero3Bg.desktop} 
              autoPlay loop muted playsInline 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            >
              <source src={isMobile ? hero3Bg.mobile : hero3Bg.desktop} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
          </>
        ) : (
          <div className="hero-text-bg hero-3-dynamic-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        )}

        <div className="hero-text-content" style={{ minHeight: '40vh', padding: '80px 20px' }}>
          <h1 className="hero-text-title" style={{ fontSize: '2.5rem' }}>
            {t.home.hero3?.title || "KIẾN THỨC PICKLEBALL"} <br />
            <span className="hero-text-subtitle-strong" style={{ color: '#c5a459', fontSize: '1.5rem' }}>
              {t.home.hero3?.subtitle || "Nâng tầm kỹ năng của bạn"}
            </span>
          </h1>
          
        </div>
      </section>

    </div>
  );
};

export default Home;