import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { getTranslations } from "../translations";

const Footer = ({ language }) => {
  const t = getTranslations(language);

  return (
    <footer className="network-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Partner */}
          <div className="footer-section partner-section">
  <h3 className="footer-title">{t.footer.partner}</h3>

  <div className="partner-grid">
    <a
      href="https://keepfly.vn"
      target="_blank"
      rel="noopener noreferrer"
      className="partner-link"
    >
      <img
        src="/keepfly.jpg"
        alt="KEEPFLY"
        className="partner-logo"
      />
    </a>

    {/* Logo 2 */}
    <a href="https://pinbus.vn/" className="partner-link">
      <img
        src="/pinbus.jpg"
        alt="Pinbus"
        className="partner-logo"
      />
    </a>
  </div>
</div>


          {/* Quick Links */}
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

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">{t.footer.contact}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>mrppopencup@gmail.com</span>
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

          {/* Social */}
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
