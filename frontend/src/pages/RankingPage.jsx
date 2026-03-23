import React from 'react';
import { Trophy } from 'lucide-react';
import { getTranslations } from '../translations';

const RankingPage = ({ language }) => {
  const t = getTranslations(language);
  
  // Cập nhật danh sách 4 hạng mục: Intern, Advan, Pro, Master
  const rankingCategories = [
    { id: 'intern', name: t.ranking.intermediate, subtitle: t.ranking.intermediateSubtitle },
    { id: 'advan', name: t.ranking.advanced, subtitle: t.ranking.advancedSubtitle },
    { id: 'pro', name: t.ranking.pro, subtitle: t.ranking.proSubtitle },
    { id: 'master', name: t.ranking.master, subtitle: t.ranking.masterSubtitle }
  ];

  return (
    <div className="ranking-page" style={{ backgroundColor: '#000', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. KHU VỰC HEADER (Style Net-Bg Dark) */}
      <section className="fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .rank-hero-content {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
              gap: 15px !important; 
              padding: 100px 20px !important; 
              text-align: center !important;
              position: relative !important;
              z-index: 2 !important;
              min-height: 40vh !important;
            }
            .rank-hero-title {
              color: #ffffff !important;
              font-size: 3.5rem !important;
              font-weight: bold !important;
              text-transform: uppercase !important;
              letter-spacing: 3px !important;
              margin: 0 !important;
            }
            .rank-hero-subtitle {
              color: #c5a459 !important;
              font-size: 1.2rem !important;
              text-transform: uppercase !important;
              letter-spacing: 4px !important;
            }
            .rank-dynamic-bg {
              background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url("/net-bg.jpg");
              background-size: cover;
              background-position: center;
            }
            @media (max-width: 768px) {
              .rank-hero-title { font-size: 2.2rem !important; }
            }
          `}
        </style>

        <div className="rank-dynamic-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        
        <div className="rank-hero-content">
          <h1 className="rank-hero-title">{t.ranking.title}</h1>
          <p className="rank-hero-subtitle">{t.ranking.subtitle}</p>
        </div>
      </section>

      {/* 2. KHU VỰC 4 KHỐI CARD COMING SOON */}
      <div className="ranking-container" style={{ padding: '40px 20px 80px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        
        <div className="ranking-grid" style={{
          display: 'grid',
          // Tự động chia 4 cột trên màn hình lớn, 2 cột trên tablet và 1 cột trên mobile
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px'
        }}>
          {rankingCategories.map(cat => (
            <section key={cat.id} className="ranking-section fade-in-section">
              <div className="ranking-card" style={{ 
                backgroundColor: '#0a0a0a', 
                border: '1px solid #c5a459', 
                borderRadius: '12px', 
                padding: '50px 15px', 
                textAlign: 'center',
                boxShadow: '0 0 20px rgba(197, 164, 89, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}>
                <Trophy style={{ color: '#c5a459', marginBottom: '20px' }} size={32} />
                
                <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '5px', textTransform: 'uppercase' }}>
                  {cat.name}
                </h2>
                
                <p style={{ color: '#c5a459', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  {cat.subtitle}
                </p>
                
                <div style={{ width: '40px', height: '2px', backgroundColor: '#c5a459', marginBottom: '25px' }}></div>
                
                <p className="pulse-text" style={{ 
                  color: '#c5a459', 
                  fontSize: '1.6rem', 
                  fontWeight: 'bold', 
                  letterSpacing: '3px',
                  animation: 'pulse 2s infinite',
                  margin: 0
                }}>
                  {t.ranking.comingSoon}
                </p>
                
                <style>
                  {`
                    @keyframes pulse {
                      0% { opacity: 0.4; transform: scale(0.97); }
                      50% { opacity: 1; transform: scale(1); }
                      100% { opacity: 0.4; transform: scale(0.97); }
                    }
                    .ranking-card:hover { transform: translateY(-5px); }
                  `}
                </style>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RankingPage;