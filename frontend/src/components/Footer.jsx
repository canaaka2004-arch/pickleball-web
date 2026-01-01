import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    vi: {
      about: 'Về Chúng Tôi',
      aboutText: 'Cộng đồng Petanque Việt Nam - Nơi kết nối đam mê và phát triển bộ môn Petanque trên toàn quốc.',
      quickLinks: 'Liên Kết',
      contact: 'Liên Hệ',
      follow: 'Theo Dõi',
      copyright: '© 2024 Petanque Vietnam. Tất cả quyền được bảo lưu.'
    },
    en: {
      about: 'About Us',
      aboutText: 'Vietnam Petanque Community - Connecting passion and developing Petanque nationwide.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      follow: 'Follow Us',
      copyright: '© 2024 Petanque Vietnam. All rights reserved.'
    }
  };

  const links = {
    vi: [
      { name: 'Trang Chủ', path: '/' },
      { name: 'Giải Đấu', path: '/tournaments' },
      { name: 'Xếp Hạng', path: '/rankings' },
      { name: 'Tin Tức', path: '/news' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'Tournaments', path: '/tournaments' },
      { name: 'Rankings', path: '/rankings' },
      { name: 'News', path: '/news' }
    ]
  };

  const t = content[language];

  return (
    <footer className="network-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">{t.about}</h3>
            <p className="footer-text">{t.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t.quickLinks}</h3>
            <div className="footer-links">
              {links[language].map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t.contact}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@petanquevn.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+84 123 456 789</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-title">{t.follow}</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
