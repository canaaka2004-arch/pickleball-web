import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { getTranslations } from '../translations';

// Mock data for gallery
const galleryImages = [
  { id: 1, src: 'https://images.pexels.com/photos/8224733/pexels-photo-8224733.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 1' },
  { id: 2, src: 'https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 2' },
  { id: 3, src: 'https://images.pexels.com/photos/8224729/pexels-photo-8224729.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 3' },
  { id: 4, src: 'https://images.pexels.com/photos/8224735/pexels-photo-8224735.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 4' },
  { id: 5, src: 'https://images.pexels.com/photos/8224731/pexels-photo-8224731.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 5' },
  { id: 6, src: 'https://images.pexels.com/photos/8224734/pexels-photo-8224734.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tournament action 6' },
];

// Mock data for videos
const highlightVideos = [
  { id: 1, thumbnail: 'https://images.pexels.com/photos/8224733/pexels-photo-8224733.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'MR.PP Open Cup Season 5 - Highlights', duration: '5:32' },
  { id: 2, thumbnail: 'https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Best Rallies - Championship Finals', duration: '3:45' },
  { id: 3, thumbnail: 'https://images.pexels.com/photos/8224729/pexels-photo-8224729.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Top 10 Points of the Tournament', duration: '4:18' },
];

// Mock data for past moments
const pastMoments = [
  { id: 1, season: 'Season 4', image: 'https://images.pexels.com/photos/8224735/pexels-photo-8224735.jpeg?auto=compress&cs=tinysrgb&w=400', champion: 'Team Alpha' },
  { id: 2, season: 'Season 3', image: 'https://images.pexels.com/photos/8224731/pexels-photo-8224731.jpeg?auto=compress&cs=tinysrgb&w=400', champion: 'Team Beta' },
  { id: 3, season: 'Season 2', image: 'https://images.pexels.com/photos/8224734/pexels-photo-8224734.jpeg?auto=compress&cs=tinysrgb&w=400', champion: 'Team Gamma' },
  { id: 4, season: 'Season 1', image: 'https://images.pexels.com/photos/8224733/pexels-photo-8224733.jpeg?auto=compress&cs=tinysrgb&w=400', champion: 'Team Delta' },
];

const MediaPage = ({ language }) => {
  const t = getTranslations(language);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="media-page">
      <div className="page-hero">
        <h1 className="page-title">{t.media.title}</h1>
        <p className="page-subtitle">{t.media.subtitle}</p>
      </div>

      <div className="media-container">
        {/* Photo Gallery Section */}
        <section className="media-section fade-in-section">
          <h2 className="media-section-title">{t.media.gallery}</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Highlights Section */}
        <section className="media-section fade-in-section">
          <h2 className="media-section-title">{t.media.highlights}</h2>
          <div className="video-grid">
            {highlightVideos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <div className="play-button">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Tournament Moments */}
        <section className="media-section fade-in-section">
          <h2 className="media-section-title">{t.media.pastMoments}</h2>
          <div className="moments-grid">
            {pastMoments.map((moment) => (
              <div key={moment.id} className="moment-card">
                <div className="moment-image">
                  <img src={moment.image} alt={moment.season} />
                  <div className="moment-overlay">
                    <span className="moment-season">{moment.season}</span>
                  </div>
                </div>
                <div className="moment-info">
                  <span className="moment-champion">🏆 {moment.champion}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default MediaPage;
