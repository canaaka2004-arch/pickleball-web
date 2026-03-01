/**
 * Centralized Translation System
 * All static text content for Vietnamese/English bilingual support
 */

const translations = {
  vi: {
    // Navigation
    nav: {
      home: 'Trang Chủ',
      tournament: 'Giải Đấu',
      athletes: 'Vận Động Viên',
      contact: 'Liên Hệ',
      menu: 'MENU',
      switchLang: 'English'
    },

    // Home Page
    home: {
      hero2: {
        title: 'MR PHƯƠNG PICKLEBALL',
        subtitle: 'OPEN CUP',
        btnRegister: 'THAM GIA'
      },
      hero3: {
        title: 'COMING SOON...',
        subtitle: 'COMING SOON...'
      }
    },

    // Registration Form
    register: {
      title: 'ĐĂNG KÝ THAM GIA',
      fullName: 'Họ và tên vận động viên',
      dob: 'Ngày tháng năm sinh',
      phone: 'Số điện thoại',
      email: 'Email (không bắt buộc)',
      country: 'Quốc gia',
      chooseCountry: '-- Chọn quốc gia --',
      gender: 'Giới tính',
      chooseGender: '-- Chọn giới tính --',
      male: 'Nam',
      female: 'Nữ',
      level: 'Trình độ',
      rating: 'Điểm trình',
      upload: 'Upload hình ảnh vận động viên (không bắt buộc)',
      submit: 'ĐĂNG KÝ',
      sending: 'Đang gửi...',
      chooseLevel: '-- Chọn trình độ --',
      ratingPlaceholder: 'Nhập điểm',
      successMsg: 'Đăng ký thành công!',
      errorSubmit: 'Lỗi gửi đăng ký',
      unknownError: 'Không rõ lỗi',
      // Validation errors
      errGender: 'Chưa chọn giới tính.',
      errFullName: 'Chưa cung cấp họ và tên.',
      errDob: 'Chưa cung cấp ngày tháng năm sinh.',
      errPhone: 'Chưa cung cấp số điện thoại.',
      errLevel: 'Chưa chọn trình độ.',
      errRating: 'Chưa nhập điểm trình.',
      errRatingNum: 'Điểm trình phải là số >= 0.',
      errCountry: 'Chưa chọn quốc gia.',
      errRatingRange: 'Sai trình độ: {label}. Điểm hợp lệ: {min}–{max}.'
    },

    // Contact Page
    contact: {
      title: 'Liên Hệ Với Chúng Tôi',
      subtitle: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn',
      form: {
        name: 'Họ và Tên',
        namePlaceholder: 'Nguyễn Văn A',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Số Điện Thoại',
        phonePlaceholder: '0xxx',
        subject: 'Tiêu Đề',
        subjectPlaceholder: 'Vấn đề bạn quan tâm',
        message: 'Nội Dung',
        messagePlaceholder: 'Nhập nội dung tin nhắn của bạn...',
        submit: 'Gửi Tin Nhắn'
      },
      info: {
        title: 'Thông Tin Hỗ Trợ',
        email: 'Email',
        phone: 'Điện Thoại',
        address: 'Địa Chỉ',
        city: 'TP. Hồ Chí Minh',
        country: 'Việt Nam'
      },
      success: 'Tin nhắn đã được gửi thành công!',
      error: 'Vui lòng điền đầy đủ thông tin'
    },

    // Footer
    footer: {
      partner: 'Đồng Hành',
      quickLinks: 'Liên Kết',
      contact: 'Liên Hệ',
      follow: 'Theo Dõi',
      copyright: '© 2025 MR.PHUONG PICKLEBALL COMMUNITY',
      links: [
        { name: 'Trang Chủ', path: '/' },
        { name: 'Vận Động Viên', path: '/athletes' }
      ]
    },

    // Common
    common: {
      loading: 'Đang tải...',
      error: 'Có lỗi xảy ra',
      required: 'Bắt buộc',
      optional: 'Không bắt buộc',
      submit: 'Gửi',
      cancel: 'Hủy',
      back: 'Quay lại',
      viewAll: 'Xem tất cả',
      readMore: 'Đọc thêm'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      tournament: 'Tournament',
      athletes: 'Athletes',
      contact: 'Contact',
      menu: 'MENU',
      switchLang: 'Tiếng Việt'
    },

    // Home Page
    home: {
      hero2: {
        title: 'MR PHƯƠNG PICKLEBALL',
        subtitle: 'OPEN CUP',
        btnRegister: 'JOIN NOW'
      },
      hero3: {
        title: 'COMING SOON...',
        subtitle: 'COMING SOON...'
      }
    },

    // Registration Form
    register: {
      title: 'PLAYER REGISTRATION',
      fullName: 'Full name',
      dob: 'Date of birth',
      phone: 'Phone number',
      email: 'Email (optional)',
      country: 'Country',
      chooseCountry: '-- Select country --',
      gender: 'Gender',
      chooseGender: '-- Select gender --',
      male: 'Male',
      female: 'Female',
      level: 'Skill level',
      rating: 'Rating',
      upload: 'Upload player photo (optional)',
      submit: 'SUBMIT',
      sending: 'Submitting...',
      chooseLevel: '-- Select level --',
      ratingPlaceholder: 'Enter rating',
      successMsg: 'Registration successful!',
      errorSubmit: 'Submit error',
      unknownError: 'Unknown error',
      // Validation errors
      errGender: 'Please select gender.',
      errFullName: 'Full name is required.',
      errDob: 'Date of birth is required.',
      errPhone: 'Phone number is required.',
      errLevel: 'Please select level.',
      errRating: 'Rating is required.',
      errRatingNum: 'Rating must be a number >= 0.',
      errCountry: 'Please select a country.',
      errRatingRange: 'Invalid level: {label}. Valid range: {min}–{max}.'
    },

    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'We are always ready to listen and support you',
      form: {
        name: 'Full Name',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        phone: 'Phone Number',
        phonePlaceholder: '0xxx',
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
        address: 'Address',
        city: 'Ho Chi Minh City',
        country: 'Vietnam'
      },
      success: 'Message sent successfully!',
      error: 'Please fill in all fields'
    },

    // Footer
    footer: {
      partner: 'Partners',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      follow: 'Follow Us',
      copyright: '© 2025 MR.PHUONG PICKLEBALL COMMUNITY',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Athletes', path: '/athletes' }
      ]
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      required: 'Required',
      optional: 'Optional',
      submit: 'Submit',
      cancel: 'Cancel',
      back: 'Back',
      viewAll: 'View All',
      readMore: 'Read More'
    }
  }
};

/**
 * Get translation function
 * @param {string} language - 'vi' or 'en'
 * @returns {object} Translation object for the specified language
 */
export const getTranslations = (language) => {
  return translations[language] || translations.vi;
};

/**
 * Hook-friendly translation getter
 * @param {string} language - 'vi' or 'en'
 * @param {string} path - Dot-notation path like 'nav.home' or 'contact.form.name'
 * @returns {string|object} Translation value
 */
export const t = (language, path) => {
  const keys = path.split('.');
  let result = translations[language] || translations.vi;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return path as fallback
    }
  }
  
  return result;
};

export default translations;
