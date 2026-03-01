# 💒 Thiệp Cưới Nguyễn Anh ❤️ Lê Hòa (React / NextJS)

Chào mừng bạn đến với dự án Thiệp cưới được tối ưu hóa theo tiêu chuẩn React production. Dự án này tập trung vào hiệu suất, tính thẩm mỹ cao và kiến trúc linh hoạt, dễ dàng bảo trì.

## 🎯 Mục tiêu Kiến trúc

Dự án này được tổ chức lại để đạt được các tiêu chuẩn chuyên nghiệp:
- **Tách UI và logic riêng**: Giúp component sạch sẽ, dễ đọc.
- **Dễ bảo trì (Maintain)**: Tìm kiếm và sửa lỗi nhanh chóng.
- **Dễ mở rộng (Scale)**: Thêm tính năng mới không ảnh hưởng đến phần cũ.
- **Tái sử dụng component**: Tránh lặp lại mã (DRY - Don't Repeat Yourself).

## 🏗️ Cấu trúc dự án

Dự án được phân chia theo module hóa:

```
wedding-invite/
├── app/                  # Entry chính của NextJS (Page, Layout, Global styles)
├── components/           # UI Components (Chia nhỏ theo chức năng)
│   ├── sections/         # Các thành phần chính (Hero, Venue, Gallery...)
│   ├── ui/               # Các phần tử cơ bản (Button, Divider, Animation...)
│   └── features/         # Logic đặc thù (FloatingControls, Audio...)
├── hooks/                # Custom hooks (Logic tách khỏi UI)
├── data/                 # Quản lý nội dung (wedding-data.ts)
├── lib/                  # Thư viện và helper functions (formatters, gsap configs...)
├── types/                # Định nghĩa kiểu dữ liệu TypeScript
└── public/               # Tài nguyên tĩnh (Ảnh, Video, Âm nhạc)
```

### Chi tiết các thư mục:

1.  **`app/`**: Chứa `layout.tsx` (Layout toàn trang), `page.tsx` (Trang chính), và `globals.css`. `page.tsx` đóng vai trò là nơi điều phối các sections, không chứa logic phức tạp.
2.  **`components/sections/`**: Mỗi phần của trang (như Hero, Câu chuyện, Địa điểm, Gallery) là một folder/file riêng biệt.
3.  **`components/ui/`**: Các component tái sử dụng như `AnimatedSection`, các nút bấm premium, hiệu ứng mờ (glassmorphism).
4.  **`hooks/`**: Chứa logic xử lý như `useCountdown` cho đồng hồ đếm ngược, `useAudio` cho nhạc nền, giúp component chỉ tập trung vào hiển thị.
5.  **`data/wedding-data.ts`**: **Trái tim của dự án**. Bạn chỉ cần sửa file này để thay đổi thông tin cô dâu chú rể, ngày giờ, địa điểm và hình ảnh mà không cần chạm vào code UI.
6.  **`lib/`**: Chứa các hàm định dạng ngày tháng (`formatters.ts`) và cấu hình thư viện bên thứ ba (GSAP).

## 🚀 Bắt đầu ngay

### Yêu cầu
- Node.js 18+
- npm hoặc pnpm

### Cài đặt
1. Cài đặt dependency: `npm install`
2. Chạy môi trường phát triển: `npm run dev`
3. Truy cập: [http://localhost:3000](http://localhost:3000)

## 🎨 Tùy chỉnh (Theme & Nội dung)

Để tùy chỉnh thiệp cưới cho riêng mình, bạn chỉ cần thực hiện 2 bước đơn giản:
1.  **Sửa thông tin**: Thay đổi các giá trị trong `data/wedding-data.ts`.
2.  **Sửa màu sắc**: Điều chỉnh các biến CSS (`--primary`, `--primary-light`, `--gold`, v.v.) trong `app/globals.css`.

## 🛠️ Công nghệ sử dụng
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS / Vanilla CSS
- **Animation**: Framer Motion & GSAP
- **Type Safety**: TypeScript

---
Được thiết kế với ❤️ để ghi lại những khoảnh khắc đẹp nhất.
