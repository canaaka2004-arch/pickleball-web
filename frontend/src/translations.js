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
      format: 'Thể Thức',
      media: 'Hình Ảnh',
      ranking: 'Bảng Xếp Hạng',
      live: 'Kết Quả Trực Tiếp',
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

    // Tournament Slots
    slots: {
      title: 'ĐĂNG KÝ THEO NỘI DUNG',
      subtitle: 'Tình trạng slot đăng ký',
      registered: 'Đã đăng ký',
      available: 'Còn trống',
      full: 'HẾT SLOT'
    },

    // Format Page
    format: {
      title: 'THỂ THỨC GIẢI ĐẤU',
      subtitle: 'Cấu trúc và quy định thi đấu',
      groupStage: {
        title: 'VÒNG BẢNG',
        description: 'Các đội được chia thành các bảng đấu vòng tròn. Mỗi đội sẽ gặp tất cả các đội khác trong bảng.',
        rules: [
          'Thắng: 3 điểm',
          'Hòa: 1 điểm',
          'Thua: 0 điểm',
          '2 đội đứng đầu mỗi bảng đi tiếp'
        ]
      },
      knockout: {
        title: 'VÒNG LOẠI TRỰC TIẾP',
        description: 'Các đội thắng vòng bảng thi đấu theo thể thức loại trực tiếp.',
        stages: ['Vòng 16', 'Tứ Kết', 'Bán Kết', 'Chung Kết']
      },
      bracket: {
        title: 'SƠ ĐỒ THI ĐẤU',
        quarterFinal: 'TỨ KẾT',
        semiFinal: 'BÁN KẾT',
        final: 'CHUNG KẾT',
        champion: 'VÔ ĐỊCH'
      }
    },

    // Prize Section
    prize: {
      title: 'CƠ CẤU GIẢI THƯỞNG',
      subtitle: 'Phần thưởng hấp dẫn dành cho các vận động viên',
      champion: 'VÔ ĐỊCH',
      runnerUp: 'Á QUÂN',
      thirdPlace: 'HẠNG BA',
      total: 'TỔNG GIẢI THƯỞNG'
    },

    // Media Page
    media: {
      title: 'HÌNH ẢNH & VIDEO',
      subtitle: 'Những khoảnh khắc đáng nhớ từ các giải đấu',
      gallery: 'THƯ VIỆN ẢNH',
      highlights: 'VIDEO NỔI BẬT',
      pastMoments: 'KHOẢNH KHẮC QUA CÁC MÙA GIẢI'
    },

    // Ranking Page
    ranking: {
      title: 'BẢNG XẾP HẠNG',
      subtitle: 'Top vận động viên theo trình độ',
      intermediate: 'TOP 20 INTERMEDIATE',
      advanced: 'TOP 20 ADVANCED',
      rank: 'Hạng',
      player: 'Vận động viên',
      points: 'Điểm'
    },

    // Live Results
    live: {
      title: 'KẾT QUẢ TRỰC TIẾP',
      subtitle: 'Theo dõi các trận đấu đang diễn ra',
      court: 'Sân',
      vs: 'VS',
      status: {
        live: 'ĐANG DIỄN RA',
        finished: 'KẾT THÚC',
        upcoming: 'SẮP DIỄN RA'
      },
      noMatches: 'Không có trận đấu nào đang diễn ra'
    },

    // Footer
    footer: {
      partner: 'Đồng Hành',
      quickLinks: 'Liên Kết',
      contact: 'Liên Hệ',
      follow: 'Theo Dõi',
      copyright: '©2026 MATCH POINT CHAMPIONSHIP',
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
      format: 'Format',
      media: 'Media',
      ranking: 'Ranking',
      live: 'Live Results',
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

    // Tournament Slots
    slots: {
      title: 'REGISTRATION BY EVENT',
      subtitle: 'Slot availability status',
      registered: 'Registered',
      available: 'Available',
      full: 'FULL'
    },

    // Format Page
    format: {
      title: 'TOURNAMENT FORMAT',
      subtitle: 'Competition structure and rules',
      groupStage: {
        title: 'GROUP STAGE',
        description: 'Teams are divided into groups for round-robin matches. Each team plays all other teams in their group.',
        rules: [
          'Win: 3 points',
          'Draw: 1 point',
          'Loss: 0 points',
          'Top 2 teams advance'
        ]
      },
      knockout: {
        title: 'KNOCKOUT STAGE',
        description: 'Group winners compete in single elimination format.',
        stages: ['Round of 16', 'Quarter Finals', 'Semi Finals', 'Final']
      },
      bracket: {
        title: 'BRACKET',
        quarterFinal: 'QUARTER FINAL',
        semiFinal: 'SEMI FINAL',
        final: 'FINAL',
        champion: 'CHAMPION'
      }
    },

    // Prize Section
    prize: {
      title: 'PRIZE STRUCTURE',
      subtitle: 'Exciting rewards for athletes',
      champion: 'CHAMPION',
      runnerUp: 'RUNNER-UP',
      thirdPlace: 'THIRD PLACE',
      total: 'TOTAL PRIZE POOL'
    },

    // Media Page
    media: {
      title: 'PHOTOS & VIDEOS',
      subtitle: 'Memorable moments from tournaments',
      gallery: 'PHOTO GALLERY',
      highlights: 'VIDEO HIGHLIGHTS',
      pastMoments: 'PAST TOURNAMENT MOMENTS'
    },

    // Ranking Page
    ranking: {
      title: 'RANKINGS',
      subtitle: 'Top players by skill level',
      intermediate: 'TOP 20 INTERMEDIATE',
      advanced: 'TOP 20 ADVANCED',
      rank: 'Rank',
      player: 'Player',
      points: 'Points'
    },

    // Live Results
    live: {
      title: 'LIVE RESULTS',
      subtitle: 'Follow ongoing matches',
      court: 'Court',
      vs: 'VS',
      status: {
        live: 'LIVE',
        finished: 'FINISHED',
        upcoming: 'UPCOMING'
      },
      noMatches: 'No matches currently in progress'
    },

    // Footer
    footer: {
      partner: 'Partners',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      follow: 'Follow Us',
      copyright: '©2026 MATCH POINT CHAMPIONSHIP',
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
