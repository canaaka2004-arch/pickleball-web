import React, { useState, useEffect } from 'react';
import { Play, X, Image as ImageIcon } from 'lucide-react';

const MediaPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`${API_URL}?t=${new Date().getTime()}`);
        const result = await response.json();
        if (result.gallery) setMediaList(result.gallery);
      } catch (error) {
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const images = mediaList.filter(item => item.type === 'image' || !item.type);
  const videos = mediaList.filter(item => item.type === 'video');

  if (loading) return <div style={{color: '#c5a459', textAlign: 'center', padding: '100px'}}>Loading...</div>;

  return (
    <div className="media-page" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <section className="fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .media-hero-content {
              display: flex !important; flex-direction: column !important; align-items: center !important;
              justify-content: center !important; gap: 15px !important; padding: 100px 20px !important;
              text-align: center !important; position: relative !important; z-index: 2 !important; min-height: 40vh !important;
            }
            .media-hero-title {
              color: #ffffff !important; font-size: 3rem !important; font-weight: bold !important;
              text-transform: uppercase !important; letter-spacing: 3px !important; margin: 0 !important;
            }
            .media-hero-subtitle {
              color: #c5a459 !important; font-size: 1.1rem !important; text-transform: uppercase !important; letter-spacing: 4px !important;
            }
            .media-dynamic-bg {
              background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url("net-bg.jpg");
              background-size: cover; background-position: center;
            }
            .media-grid {
              display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; padding: 20px 0;
            }
            .media-card {
              position: relative; border-radius: 12px; overflow: hidden; background: #111; border: 1px solid #222;
              aspect-ratio: 16/9; cursor: pointer; transition: all 0.3s ease;
            }
            .media-card:hover { transform: scale(1.02); border-color: #c5a459; }
            .media-card img { width: 100%; height: 100%; object-fit: cover; }
            .media-overlay {
              position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center;
              opacity: 0; transition: 0.3s;
            }
            .media-card:hover .media-overlay { opacity: 1; }
          `}
        </style>

        <div className="media-dynamic-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        <div className="media-hero-content">
          <h1 className="media-hero-title">HÌNH ẢNH & VIDEO</h1>
          <p className="media-hero-subtitle">Match Point Championship</p>
        </div>
      </section>

      <div className="media-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <section className="media-section" style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#fff', borderLeft: '4px solid #c5a459', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.8rem' }}>THƯ VIỆN ẢNH</h2>
          <div className="media-grid">
            {images.map((img, idx) => (
              <div key={idx} className="media-card" onClick={() => setSelectedItem(img)}>
                <img src={img.image_url} alt="Gallery" />
                <div className="media-overlay"><ImageIcon color="#fff" size={32} /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="media-section">
          <h2 style={{ color: '#fff', borderLeft: '4px solid #c5a459', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.8rem' }}>VIDEO HIGHLIGHTS</h2>
          <div className="media-grid">
            {videos.map((vid, idx) => (
              <div key={idx} className="media-card" onClick={() => window.open(vid.image_url, '_blank')}>
                <img src="video-placeholder.jpg" alt="Video" style={{opacity: 0.5}} />
                <div className="media-overlay" style={{opacity: 1}}>
                  <div style={{textAlign: 'center'}}>
                    <Play color="#c5a459" size={48} fill="#c5a459" />
                    <p style={{color: '#fff', marginTop: '10px', fontSize: '0.9rem'}}>{vid.title || "Xem Video"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedItem && (
        <div className="lightbox-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedItem(null)}>
          <button style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><X size={40} /></button>
          <img src={selectedItem.image_url} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px' }} alt="Full size" />
        </div>
      )}
    </div>
  );
};

export default MediaPage;