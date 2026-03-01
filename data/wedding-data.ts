export const WEDDING_DATA = {
  // Thông tin Cô dâu - Chú rể
  groom: {
    name: "Nguyễn Văn Anh",
    phone: "090-123-4567",
    account: {
      bank: "Vietcombank",
      accountNumber: "1234567890",
      depositor: "Nguyễn Văn Anh",
    },
    parents: {
      father: {
        name: "Nguyễn Văn B",
      },
      mother: {
        name: "Trần Thị C",
      },
    },
  },
  bride: {
    name: "Nguyễn Thị Hòa",
    phone: "090-987-6543",
    account: {
      bank: "Techcombank",
      accountNumber: "0987654321",
      depositor: "Lê Thị Hòa",
    },
    parents: {
      father: {
        name: "Lê Văn D",
      },
      mother: {
        name: "Phạm Thị E",
      },
    },
  },

  // Thông tin sự kiện
  events: {
    engagement: {
      title: "Lễ Ăn Hỏi",
      date: "2026-12-20T09:00:00",
      location: "Tư gia nhà gái",
      addressGroom: "Nhà Trai: 456 Hoàng Văn Thụ, Tân Bình",
      addressBride: "Số 123, Đường ABC, Quận 1, TP. HCM",
      mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424302240223!2d106.7017555!3d10.7756587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46893693bb%3A0xe5a36ada11e74a8a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
      mapLinkGroom: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424302240223!2d106.7017555!3d10.7756587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46893693bb%3A0xe5a36ada11e74a8a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
      mapLinkBride: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424302240223!2d106.7017555!3d10.7756587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46893693bb%3A0xe5a36ada11e74a8a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
    },
    wedding: {
      title: "Lễ Thành Hôn",
      date: "2026-12-24T11:00:00",
      // location: "Nhà hàng Luxury Palace",
      address: "Số 456, Đường XYZ, Quận 3, TP. HCM",
      addressGroom: "Số 456, Đường XYZ, Quận 3, TP. HCM",
      addressBride: "Nhà Gái: 123 Lê Lợi, Quận 1",
      mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2856428255963!2d106.6918883!3d10.7831036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f309990e727%3A0x6739660167f2b1c8!2zS2jDoWNoIHPhuqFuIFNoZXJhdG9uIFNhaWdvbiAmIFRvd2Vycw!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
      mapLinkGroom: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2856428255963!2d106.6918883!3d10.7831036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f309990e727%3A0x6739660167f2b1c8!2zS2jDoWNoIHPhuqFuIFNoZXJhdG9uIFNhaWdvbiAmIFRvd2Vycw!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
      mapLinkBride: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2856428255963!2d106.6918883!3d10.7831036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f309990e727%3A0x6739660167f2b1c8!2zS2jDoWNoIHPhuqFuIFNoZXJhdG9uIFNhaWdvbiAmIFRvd2Vycw!5e0!3m2!1svi!2svn!4v1709280000000!5m2!1svi!2svn",
    },
  },

  // UI 텍스트 (Tiếng Việt)
  content: {
    navigation: {
      home: "Trang chủ",
      intro: "Thư ngỏ",
      venue: "Địa điểm",
      gallery: "Album ảnh",
      contact: "Mừng cưới",
      close: "Đóng",
      menu: "Menu",
      appTitle: "Wedding Invitation",
    },
    opening: {
      title: "Lời mời trân trọng",
      openButton: "Mở thiệp",
    },
    intro: {
      eyebrow: "Trân trọng kính mời",
      title: "THƯ NGỎ",
      mainText:
        "Tình yêu không phải là tìm thấy một người hoàn hảo,<br />mà là học cách nhìn thấy những điều tuyệt vời từ một người không hoàn hảo.<br /><br />Sau những năm tháng gắn bó, chúng mình quyết định về chung một nhà.<br />Sự hiện diện của quý vị là niềm hạnh phúc lớn nhất đối với chúng mình.",
    },
    couple: {
      groomLabel: "Chú rể",
      brideLabel: "Cô dâu",
      groomBio: "Một chàng trai điềm đạm, yêu thương gia đình.",
      brideBio: "Một cô gái nhẹ nhàng, luôn tràn đầy năng lượng.",
      parentsLabel: "Gia đình hai bên",
    },
    venue: {
      eyebrow: "Sự kiện",
      title: "ĐỊA ĐIỂM TỔ CHỨC",
      countdownDays: "Ngày",
      countdownHours: "Giờ",
      countdownMinutes: "Phút",
      countdownSeconds: "Giây",
      detailsButton: "Chi tiết",
      addressGroom: "Nhà Trai",
      addressBride: "Nhà Gái",
    },
    gallery: {
      eyebrow: "Khoảnh khắc",
      title: "ALBUM ẢNH CƯỚI",
      expandButton: "Xem thêm ảnh",
      collapseButton: "Thu gọn",
    },
    thankyou: {
      title: "Lời Cảm Ơn",
      message: "Trong khoảnh khắc thiêng liêng và hạnh phúc nhất của cuộc đời,<br />được đón nhận tình yêu thương và sự hiện diện của Quý vị là món quà vô giá nhất đối với chúng con.<br /><br />Xin chân thành cảm ơn Quý vị đã cùng chúng con viết nên<br />khởi đầu đẹp đẽ cho hành trình hôn nhân này.",
    },
    contact: {
      eyebrow: "Mừng cưới",
      title: "GỬI LỜI CHÚC PHÚC",
      groomSide: "Nhà Trai",
      brideSide: "Nhà Gái",
      qrTitle: "Quét mã QR để mừng cưới",
    },
    footer: {
      thankyou: "Thank You",
      credit: "Thiết kế bởi Helen Studio",
    },
  },

  // 이미지
  images: {
    main: "/screenshots/bg.jpg",
    opening: "/screenshots/bg.jpg",
    couplePhoto: "/screenshots/1.jpg",
    footerPhoto: "/screenshots/2.jpg",
    groomQR: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Nguyenvana_STB",
    brideQR: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Lethih_VCB",
    gallery: [
      { src: "/screenshots/1.jpg", alt: "Wedding moment 1", isHorizontal: false },
      { src: "/screenshots/2.jpg", alt: "Wedding moment 2", isHorizontal: false },
      { src: "/screenshots/3.jpg", alt: "Wedding moment 3", isHorizontal: true },
      { src: "/screenshots/4.jpg", alt: "Wedding moment 4", isHorizontal: false },
      { src: "/screenshots/5.jpg", alt: "Wedding moment 5", isHorizontal: false },
      { src: "/screenshots/6.jpg", alt: "Wedding moment 6", isHorizontal: true },
      { src: "/screenshots/7.jpg", alt: "Wedding moment 7", isHorizontal: false },
      { src: "/screenshots/8.jpg", alt: "Wedding moment 8", isHorizontal: false },
      { src: "/screenshots/9.jpg", alt: "Wedding moment 9", isHorizontal: true },
      { src: "/screenshots/10.jpg", alt: "Wedding moment 10", isHorizontal: false },
      { src: "/screenshots/11.jpg", alt: "Wedding moment 11", isHorizontal: false },
      { src: "/screenshots/12.jpg", alt: "Wedding moment 12", isHorizontal: true },
      { src: "/screenshots/13.jpg", alt: "Wedding moment 13", isHorizontal: false },
      { src: "/screenshots/14.jpg", alt: "Wedding moment 14", isHorizontal: false },
      { src: "/screenshots/15.jpg", alt: "Wedding moment 15", isHorizontal: true },
      { src: "/screenshots/16.jpg", alt: "Wedding moment 16", isHorizontal: false },
      { src: "/screenshots/17.jpg", alt: "Wedding moment 17", isHorizontal: false },
      { src: "/screenshots/18.jpg", alt: "Wedding moment 18", isHorizontal: true },
    ],
  },
};
