import Aside from "./aside";
import About from "./about";
import styles from '../css/main.module.css';

export default function HomePage() {
  return (
    <div className={styles.Main}>
        <div>
            <Aside/>
        </div>
        <div>
          <div>
            <About/>
          </div>
        </div>
    </div>
  );
}