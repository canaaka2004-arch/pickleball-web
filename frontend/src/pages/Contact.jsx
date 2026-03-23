import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { getTranslations } from '../translations';

const Contact = ({ language }) => {
  const { toast } = useToast();
  const t = getTranslations(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Biến trạng thái gửi & Link API
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.contact.error,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Bắn dữ liệu về Google Apps Script
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          type: "contact", // Nhãn báo cho Apps Script biết đây là tin nhắn
          ...formData
        })
      });

      const result = await response.json();

      if (result.ok) {
        toast({
          title: t.contact.success
        });
        // Reset form cho sạch sẽ
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || "Lỗi máy chủ");
      }
    } catch (error) {
      console.error("Lỗi gửi tin nhắn:", error);
      toast({
        title: "Lỗi kết nối, vui lòng thử lại sau!",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      
      {/* CSS TRỊ BỆNH TÀNG HÌNH CHỮ */}
      <style>
        {`
          .form-input, .form-textarea {
            color: #ffffff !important; 
          }
          .form-input::placeholder, .form-textarea::placeholder {
            color: #888888 !important; 
          }
        `}
      </style>

      <div className="page-hero">
        <h1 className="page-title">{t.contact.title}</h1>
        <p className="page-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">{t.contact.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.contact.form.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                rows="6"
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn-cta" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={20} />
              {isSubmitting ? "ĐANG GỬI..." : t.contact.form.submit}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h2 className="info-title">{t.contact.info.title}</h2>
          
          <div className="info-cards">
            <div className="info-card-contact">
              <Mail className="info-icon-large" size={32} />
              <h3>{t.contact.info.email}</h3>
              <p>support : matchpointchampionship@gmail.com</p>
            </div>

            <div className="info-card-contact">
              <Phone className="info-icon-large" size={32} />
              <h3>{t.contact.info.phone}</h3>
              <p>Mr.Phương 0866161616</p>
              <p>Mr.Phong 0909135558</p>
            </div>

            <div className="info-card-contact">
              <MapPin className="info-icon-large" size={32} />
              <h3>{t.contact.info.address}</h3>
              <p>{t.contact.info.city}</p>
              <p>{t.contact.info.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;