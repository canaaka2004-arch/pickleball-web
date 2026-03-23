import React from 'react';

const Tournament = () => {
  return (
    <div className="tournament-page" style={{ backgroundColor: '#000', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* KHU VỰC HEADER TÊN TRANG */}
      <section className="fade-in-section" style={{ position: 'relative', padding: '120px 20px 40px', textAlign: 'center' }}>
        <h1 style={{ 
          color: '#ffffff', 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '3px', 
          margin: 0 
        }}>
          Giải Đấu
        </h1>
        <p style={{ 
          color: '#c5a459', 
          fontSize: '1.2rem', 
          marginTop: '15px', 
          letterSpacing: '4px', 
          textTransform: 'uppercase' 
        }}>
          Match Point Championship
        </p>
      </section>

      {/* KHU VỰC COMING SOON CHÍNH GIỮA */}
      <section className="fade-in-section" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px 100px' }}>
        <div style={{
          backgroundColor: 'rgba(197, 164, 89, 0.05)', // Nền vàng đồng cực nhạt
          border: '1px solid #c5a459', // Viền vàng đồng
          borderRadius: '12px',
          padding: '80px 40px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(197, 164, 89, 0.1)',
          maxWidth: '800px',
          width: '100%'
        }}>
          {/* Vạch ngang trang trí */}
          <div style={{ width: '80px', height: '3px', backgroundColor: '#c5a459', margin: '0 auto 30px auto' }}></div>
          
          <p className="pulse-text" style={{ 
            color: '#c5a459', 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            letterSpacing: '8px',
            margin: 0,
            animation: 'pulse 2s infinite'
          }}>
            COMING SOON...
          </p>
          
          <p style={{ color: '#888', marginTop: '20px', fontSize: '1.1rem', fontStyle: 'italic' }}>
            Lịch thi đấu và danh sách chia bảng sẽ sớm được cập nhật.
          </p>

          {/* Hiệu ứng nhấp nháy */}
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
  );
};

export default Tournament;