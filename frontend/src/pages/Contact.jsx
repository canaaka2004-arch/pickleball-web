import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const content = {
    vi: {
      title: 'Liên Hệ Với Chúng Tôi',
      subtitle: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn',
      form: {
        name: 'Họ và Tên',
        namePlaceholder: 'Nguyễn Văn A',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Số Điện Thoại',
        phonePlaceholder: '+84 123 456 789',
        subject: 'Tiêu Đề',
        subjectPlaceholder: 'Vấn đề bạn quan tâm',
        message: 'Nội Dung',
        messagePlaceholder: 'Nhập nội dung tin nhắn của bạn...',
        submit: 'Gửi Tin Nhắn'
      },
      info: {
        title: 'Thông Tin Liên Hệ',
        email: 'Email',
        phone: 'Điện Thoại',
        address: 'Địa Chỉ'
      },
      success: 'Tin nhắn đã được gửi thành công!',
      error: 'Vui lòng điền đầy đủ thông tin'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are always ready to listen and support you',
      form: {
        name: 'Full Name',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Phone Number',
        phonePlaceholder: '+84 123 456 789',
        subject: 'Subject',
        subjectPlaceholder: 'Your inquiry topic',
        message: 'Message',
        messagePlaceholder: 'Enter your message...',
        submit: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      },
      success: 'Message sent successfully!',
      error: 'Please fill in all fields'
    }
  };

  const t = content[language];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.error,
        variant: "destructive"
      });
      return;
    }

    // Mock submission
    console.log('Form submitted:', formData);
    
    toast({
      title: t.success
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-subtitle">{t.subtitle}</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">{t.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phonePlaceholder}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.form.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.form.subjectPlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                rows="6"
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn-cta">
              <Send size={20} />
              {t.form.submit}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h2 className="info-title">{t.info.title}</h2>
          
          <div className="info-cards">
            <div className="info-card-contact">
              <Mail className="info-icon-large" size={32} />
              <h3>{t.info.email}</h3>
              <p>contact@petanquevn.com</p>
              <p>support@petanquevn.com</p>
            </div>

            <div className="info-card-contact">
              <Phone className="info-icon-large" size={32} />
              <h3>{t.info.phone}</h3>
              <p>+84 123 456 789</p>
              <p>+84 987 654 321</p>
            </div>

            <div className="info-card-contact">
              <MapPin className="info-icon-large" size={32} />
              <h3>{t.info.address}</h3>
              <p>{language === 'vi' ? 'Quận 1, TP. Hồ Chí Minh' : 'District 1, Ho Chi Minh City'}</p>
              <p>{language === 'vi' ? 'Việt Nam' : 'Vietnam'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
