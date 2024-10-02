'use client'
import { useEffect, useState } from 'react';
import styles from '../css/footer.module.css';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000); // Cập nhật mỗi giây

    // Xóa bộ đếm thời gian khi component bị unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={styles.Footer}>
      <h3>Hiện tại: {currentTime}</h3>
      <ul>
                <li><a href="https://www.facebook.com/frederickbonnibel" target='_blank'>Facebook</a></li>
                <li><a href="#" title='Sorry hiện tại link youtube bị lỗi'>Youtube</a></li>
                <li><a href="https://x.com/FuntimeFredBon2" target='_blank'>Twitter</a></li>
                <li><a href="https://www.tiktok.com/@mitsuru1987" target='_blank'>Tiktok</a></li>
      </ul>
      <div>
        <p>© Bản quyền thuộc về Marco Leonard | Designer: Kisune Caneld | Ý tưởng: Toyhouse</p>
      </div>
    </footer>
  );
}
