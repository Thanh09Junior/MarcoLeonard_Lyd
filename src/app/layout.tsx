'use client';
import { useEffect } from 'react';
import './globals.css';
import Head from './head';
import Page from './page';
import Script from 'next/script';

export default function RootLayout() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        alert("Không hỗ trợ thiết bị có kích thước màn hình nhỏ hơn 600px.");
      }
    };

    // Kiểm tra kích thước khi component được tải
    handleResize();

    // Lắng nghe sự kiện thay đổi kích thước cửa sổ
    window.addEventListener('resize', handleResize);

    // Dọn dẹp sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="vi">
      <Head />
      <body>
        {/* Thêm Script cho Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/b465b9b0e9.js"
          strategy="lazyOnload" // Bạn có thể thay đổi chiến lược nếu cần
          crossOrigin="anonymous"
        />
        <Page />
      </body>
    </html>
  );
}
