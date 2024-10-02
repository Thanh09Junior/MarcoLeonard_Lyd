import styles from '../css/header.module.css';

export default function HomePage() {
  return (
    <header>
        <nav className = {styles.Nav}>
            <div>
                <h1>Marco Leonard</h1>
            </div>
            <ul>
                <li><a href="https://www.facebook.com/frederickbonnibel" target='_blank'>Facebook</a></li>
                <li><a href="#" title='Sorry hiện tại link youtube bị lỗi'>Youtube</a></li>
                <li><a href="https://x.com/FuntimeFredBon2" target='_blank'>Twitter</a></li>
                <li><a href="https://www.tiktok.com/@mitsuru1987" target='_blank'>Tiktok</a></li>
            </ul>
        </nav>
    </header>
  );
}