import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { getTranslations } from '../translations';

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = getTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.tournament, path: '/tournament' },
    { name: t.nav.athletes, path: '/athletes' }, 
    { name: t.nav.format, path: '/format' },     
    { name: t.nav.ranking, path: '/ranking' }, 
    { name: t.nav.media, path: '/media' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <>
      <header className={`rr-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="rr-header-content">
          {}
          <button 
            className="rr-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} strokeWidth={1} />
            <span className="rr-menu-label">{t.nav.menu}</span>
          </button>
<style>
        {`
          
          .rr-logo-svg {
            height: 55px !important; 
            width: auto !important;   
            transition: transform 0.3s ease;
            display: block;
            margin: 0 auto;
          }

          
          @media (max-width: 768px) {
            .rr-logo-svg {
              height: 40px !important; 
            }
          }

          .rr-logo-svg:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      {}
      <Link to="/" className="rr-logo">
        <img 
          src="/logodocmauvang (1).png"
          alt="Mr P logo"
          className="rr-logo-svg"
        />
      </Link>
          

          {}
          <button 
            onClick={toggleLanguage}
            className="rr-language-toggle"
            aria-label="Toggle language"
          >
            <Globe size={25} strokeWidth={1} />
            <span className="rr-lang-text">{language.toUpperCase()}</span>
          </button>
        </div>

        {}
        <div className="rr-header-divider"></div>
      </header>

      {}
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
              {navLinks.map((link) => (
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
                {t.nav.switchLang}
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
