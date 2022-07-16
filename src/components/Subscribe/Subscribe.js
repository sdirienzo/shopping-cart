import SubscribeButton from '../SubscribeButton/SubscribeButton';
import styles from './Subscribe.module.css';

function Subscribe() {
    return (
        <section className={styles.subscribe}>
            <h3 className={styles.subscribeHeader}>New products, sweet savings - straight to your inbox.</h3>
            <p className={styles.subscribeDescription}>Keep up with what we're up to.  Unsubscribe at any time.</p>
            <div className={styles.subscribeEmailContainer}>
                <input className={styles.subscribeEmailInput} type='email' placeholder='Your email' />
                <SubscribeButton />
            </div>
        </section>
    );
}

export default Subscribe;