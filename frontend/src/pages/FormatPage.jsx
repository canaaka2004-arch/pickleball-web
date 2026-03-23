import React from 'react';
import { getTranslations } from '../translations';

const FormatPage = ({ language }) => {
  const t = getTranslations(language);

  return (
    <div className="format-page">
      
      {/* 1. KHU VỰC HEADER (Style Dark Mode - Ảnh Net giống hình 2) */}
      <section className="fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .format-hero-content {
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
            .format-hero-title {
              color: #ffffff !important;
              font-size: 2.8rem !important;
              font-weight: bold !important;
              margin-bottom: 0 !important;
              text-transform: uppercase !important;
              letter-spacing: 2px !important;
            }
            .format-hero-subtitle {
              color: #c5a459 !important; /* Màu vàng đồng Champion */
              font-size: 1.2rem !important;
              text-transform: uppercase !important;
              letter-spacing: 4px !important;
            }
            .format-dynamic-bg {
              background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url("/net-bg.jpg");
              background-size: cover;
              background-position: center;
            }
          `}
        </style>

        {/* Lớp nền ảnh Net */}
        <div className="format-dynamic-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        
        {/* Lớp chữ nổi bật lên trên */}
        <div className="format-hero-content">
          <h1 className="format-hero-title">LUẬT CHƠI & THỂ THỨC</h1>
          <p className="format-hero-subtitle">Match Point Championship</p>
        </div>
      </section>

      {/* 2. KHU VỰC NỘI DUNG CHÍNH */}
      <div className="format-container" style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* LUẬT ĐÁNH ĐÔI */}
        <section className="format-section fade-in-section" style={{ marginBottom: '40px' }}>
          <div className="format-card" style={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ color: '#c5a459' }}>
                {/* Icon 2 người tượng trưng cho đánh đôi */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: 0 }}>Luật Đánh Đôi (Doubles)</h2>
            </div>
            
            <ul style={{ color: '#ccc', lineHeight: '1.8', paddingLeft: '20px', fontSize: '1.1rem' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#c5a459' }}>Giao bóng:</strong> Phải giao chéo sân. Điểm tiếp xúc giữa vợt và bóng phải nằm dưới mức hông.</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#c5a459' }}>Quy tắc nảy 2 lần (Two-Bounce Rule):</strong> Bóng giao sang phải nảy 1 lần, đội đỡ trả bóng lại cũng phải chờ nảy 1 lần. Từ chạm thứ 3 trở đi mới được bắt Volley (đánh bóng trên không).</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#c5a459' }}>Trình tự giao:</strong> Cả 2 thành viên trong đội đều được giao bóng cho đến khi phạm lỗi (ngoại trừ lượt giao đầu tiên của trận đấu, chỉ có 1 người được giao).</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#c5a459' }}>Khu vực cấm Volley (Kitchen):</strong> Tuyệt đối không được bước chân vào hoặc đạp vạch khu vực Kitchen để thực hiện cú đánh Volley.</li>
              <li><strong style={{ color: '#c5a459' }}>Ghi điểm:</strong> Chỉ đội cầm giao bóng mới được ghi điểm. Đánh chạm 11 điểm (cách biệt 2 điểm) sẽ giành chiến thắng.</li>
            </ul>
          </div>
        </section>

        {/* LUẬT ĐÁNH ĐƠN */}
        <section className="format-section fade-in-section" style={{ marginBottom: '50px' }}>
          <div className="format-card" style={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ color: '#c5a459' }}>
                {/* Icon 1 người tượng trưng cho đánh đơn */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: 0 }}>Luật Đánh Đơn (Singles)</h2>
            </div>
            
            <ul style={{ color: '#ccc', lineHeight: '1.8', paddingLeft: '20px', fontSize: '1.1rem' }}>
              <li style={{ marginBottom: '10px' }}>Vẫn áp dụng đầy đủ các quy tắc nền tảng của Pickleball: Giao bóng dưới hông, Quy tắc nảy 2 lần (Two-Bounce) và Luật cấm bắt Volley trong Kitchen.</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#c5a459' }}>Vị trí giao bóng:</strong> Dựa hoàn toàn vào điểm số của người giao bóng.
                <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                  <li>Điểm chẵn (0, 2, 4, 6...): Đứng ở ô bên phải để giao chéo sân.</li>
                  <li>Điểm lẻ (1, 3, 5, 7...): Đứng ở ô bên trái để giao chéo sân.</li>
                </ul>
              </li>
              <li><strong style={{ color: '#c5a459' }}>Lượt giao:</strong> Vì chỉ có 1 người, nên khi phạm lỗi hoặc mất điểm, quyền giao bóng sẽ ngay lập tức được chuyển cho đối phương (Side out).</li>
            </ul>
          </div>
        </section>

        {/* 3. THỂ THỨC GIẢI ĐẤU (COMING SOON) */}
        <section className="format-section fade-in-section">
          <div className="format-card" style={{ 
            backgroundColor: 'rgba(197, 164, 89, 0.05)', // Đổ nền vàng đồng nhạt rất sang
            border: '1px solid #c5a459', 
            borderRadius: '12px', 
            padding: '60px 20px', 
            textAlign: 'center',
            boxShadow: '0 0 30px rgba(197, 164, 89, 0.1)'
          }}>
            <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '15px', textTransform: 'uppercase' }}>
              THỂ THỨC GIẢI ĐẤU
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a459', margin: '0 auto 25px auto' }}></div>
            <p className="pulse-text" style={{ 
              color: '#c5a459', 
              fontSize: '1.8rem', 
              fontWeight: 'bold', 
              letterSpacing: '5px',
              animation: 'pulse 2s infinite'
            }}>
              COMING SOON...
            </p>
            
            {/* Hiệu ứng nhấp nháy chữ cho xịn xò */}
            <style>
              {`
                @keyframes pulse {
                  0% { opacity: 0.5; transform: scale(0.98); }
                  50% { opacity: 1; transform: scale(1); }
                  100% { opacity: 0.5; transform: scale(0.98); }
                }
              `}
            </style>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FormatPage;