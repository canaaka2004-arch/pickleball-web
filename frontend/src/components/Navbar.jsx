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
    { name: t.nav.athletes, path: '/athletes' }, // <-- Đưa Vận Động Viên lên đây
    { name: t.nav.format, path: '/format' },     // <-- Đẩy Thể Thức xuống đây
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
          {/* Left: Hamburger Menu */}
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
          /* Điều chỉnh Logo nhỏ lại tinh tế hơn */
          .rr-logo-svg {
            height: 55px !important; /* Giảm chiều cao xuống còn 55px */
            width: auto !important;   /* Tự động tính chiều rộng để không bị méo */
            transition: transform 0.3s ease;
            display: block;
            margin: 0 auto;
          }

          /* Trên điện thoại thì nhỏ thêm xíu nữa cho cân đối */
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

      {/* Center: Logo - Letter P */}
      <Link to="/" className="rr-logo">
        <img 
          src="/logodocmauvang (1).png"
          alt="Mr P logo"
          className="rr-logo-svg"
        />
      </Link>
          

          {/* Right: Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="rr-language-toggle"
            aria-label="Toggle language"
          >
            <Globe size={25} strokeWidth={1} />
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
