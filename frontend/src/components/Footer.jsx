import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { getTranslations } from "../translations";

const Footer = ({ language }) => {
  const t = getTranslations(language);
  
  
  const [sponsors, setSponsors] = useState([]);
  
  
  const API_URL = "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

  
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(`${API_URL}?t=${new Date().getTime()}`);
        const result = await response.json();
        if (result.sponsors && result.sponsors.length > 0) {
          setSponsors(result.sponsors);
        }
      } catch (error) {
        console.error("Lỗi tải logo nhà tài trợ:", error);
      }
    };
    fetchSponsors();
  }, []);

  return (
    <footer className="network-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {}
          <div className="footer-section partner-section">
            <h3 className="footer-title">{t.footer.partner}</h3>

            <div className="partner-grid">
              {}
              {sponsors.length > 0 ? (
                sponsors.map((sp, index) => (
                  <a
                    key={index}
                    href={sp.link && sp.link !== "#" ? sp.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    <img
                      src={sp.logo_url}
                      alt={sp.name || `Partner ${index}`}
                      className="partner-logo"
                      style={{ objectFit: 'contain', maxHeight: '40px' }} 
                    />
                  </a>
                ))
              ) : (
                
                <>
                  <a href="https://keepfly.vn" target="_blank" rel="noopener noreferrer" className="partner-link">
                    <img src="/keepfly.jpg" alt="KEEPFLY" className="partner-logo" />
                  </a>
                  <a href="https://pinbus.vn/" target="_blank" rel="noopener noreferrer" className="partner-link">
                    <img src="/pinbus.jpg" alt="Pinbus" className="partner-logo" />
                  </a>
                </>
              )}
            </div>
          </div>

          {}
          <div className="footer-section">
            <h3 className="footer-title">{t.footer.quickLinks}</h3>
            <div className="footer-links">
              {t.footer.links.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {}
          <div className="footer-section">
            <h3 className="footer-title">{t.footer.contact}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>matchpointchampionship@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>Mr.Phương 0866161616</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>{t.contact.info.city}, {t.contact.info.country}</span>
              </div>
            </div>
          </div>

          {}
          <div className="footer-section">
            <h3 className="footer-title">{t.footer.follow}</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/1KWQKycShe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
