import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    vi: [
      { name: 'Trang Chủ', path: '/' },
      { name: 'Giải Đấu', path: '/tournament' },
      { name: 'Liên Hệ', path: '/contact' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'Tournament', path: '/tournament' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <>
      <header className={`rr-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="rr-header-content">
          {/* Left: Hamburger Menu */}
          <button 
            className="rr-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} strokeWidth={1} />
            <span className="rr-menu-label">MENU</span>
          </button>

          {/* Center: Logo - SVG */}
          <Link to="/" className="rr-logo" aria-label="Home">
            <img 
              src="https://customer-assets.emergentagent.com/job_a3c89baf-2eec-47d4-b0d2-c1f4159b9223/artifacts/2raka02o_PP%20tr%E1%BA%AFng.svg"
              alt="Petanque Vietnam Logo"
              className="rr-logo-svg"
              
            />
          </Link>

          {/* Right: Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="rr-language-toggle"
            aria-label="Toggle language"
          >
            <Globe size={18} strokeWidth={1} />
            <span className="rr-lang-text">{language.toUpperCase()}</span>
          </button>
        </div>

        {/* White divider line under header */}
        <div className="rr-header-divider"></div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          <div className="rr-menu-overlay" onClick={() => setIsMenuOpen(false)} />
          <nav className="rr-menu-panel">
            <button 
              className="rr-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1} />
            </button>
            
            <div className="rr-menu-links">
              {navLinks[language].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rr-menu-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="rr-menu-footer">
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="rr-menu-language"
              >
                {language === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
