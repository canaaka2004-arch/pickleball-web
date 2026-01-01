import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = {
    vi: [
      { name: 'Trang Chủ', path: '/' },
      { name: 'Giải Đấu', path: '/tournaments' },
      { name: 'Xếp Hạng', path: '/rankings' },
      { name: 'Tin Tức', path: '/news' },
      { name: 'Liên Hệ', path: '/contact' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'Tournaments', path: '/tournaments' },
      { name: 'Rankings', path: '/rankings' },
      { name: 'News', path: '/news' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          Pickleball Vietnam
        </Link>

        {/* Desktop Navigation */}
        <nav className="network-nav desktop-nav">
          {navLinks[language].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`network-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {navLinks[language].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="mobile-language-toggle"
          >
            <Globe size={18} />
            <span>{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
