import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ language }) => {
  const content = {
    vi: {
      quickLinks: "Liên Kết",
      contact: "Liên Hệ",
      follow: "Theo Dõi",
      partner: "Đồng Hành",
      copyright: "© 2025 MR.PHUONG PICKLEBALL COMMUNITY",
    },
    en: {
      quickLinks: "Quick Links",
      contact: "Contact",
      follow: "Follow Us",
      partner: "partner",
      copyright: "© 2025 MR.PHUONG PICKLEBALL COMMUNITY",
    },
  };

  const links = {
    vi: [
      { name: "Trang Chủ", path: "/" },
      { name: "Vận Động Viên", path: "/athletes" },
    ],
    en: [
      { name: "Home", path: "/" },
      { name: "Athletes", path: "/athletes" },
    ],
  };

  const t = content[language] || content.vi;

  return (
    <footer className="network-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* partner / Partner */}
          <div className="footer-section partner-section">
  <h3 className="footer-title">Đồng Hành</h3>

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
        alt="partner 2"
        className="partner-logo"
      />
    </a>
  </div>
</div>


          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t.quickLinks}</h3>
            <div className="footer-links">
              {(links[language] || links.vi).map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">{t.contact}</h3>
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
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h3 className="footer-title">{t.follow}</h3>
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
          <p className="copyright">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
