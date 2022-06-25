import ShopNowButton from '../ShopNowButton/ShopNowButton';
import styles from './Jumbotron.module.css';
// import image from './jumbotron-1.jpg';

function Jumbotron() {
    return (
        <section className={styles.jumbotron}>
            <div className={styles.jumbotronLeft}>
                <div className={styles.jumbotronLeftContent}>
                    <p className={styles.jumbotronText}>Great<br /> Style is<br /> Easy</p>
                    <ShopNowButton />
                </div>
            </div>
            <div className={styles.jumbotronRight}></div>
        </section>
    );
}

export default Jumbotron;