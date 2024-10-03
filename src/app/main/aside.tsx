import styles from '../css/aside.module.css';

export default function HomePage() {
  return (
    <div className={styles.Aside}>
        <div>
            <div>
                <a href="https://www.facebook.com/selenadia.project" target='_blank'>✦ ✦ CHUMAI ✦ ✦</a>
            </div>
            <div className={styles.Copyright}>
                <img src="./assest/Lyd/Lyd_1.jpg" alt="Lyd_OC" title="Cre: patricia_fox"/>
                <p>Lyd</p>
            </div>
            <div>
                <hr/>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-info"></i>Giới thiệu</a></li>
                    <li><a href="https://www.facebook.com/frederickbonnibel" target='_blank' title='Bạn có thể hỏi tác giả nè :3'><i className="fa-solid fa-pencil"></i>Thiết kế</a></li>
                    <li><a href="#" title='Tác giả chưa có cốt truyện chính thức nhé'><i className="fa-solid fa-book-atlas"></i>Cốt truyện</a></li>
                    <li><a href="https://www.facebook.com/frederickbonnibel" target='_blank' title='Bạn có thể hỏi tác giả nè :3'><i className="fa-solid fa-star-of-david"></i>Mối quan hệ</a></li>
                </ul>
                <hr/>
                <p>Ai vừa nhắc đến trà sữa đó? (OwO)</p>
            </div>
        </div>
    </div>
  );
}