import styles from './Logo.module.css';

function Logo({ text }) {
    return (
        <h3 className={styles.logo}>{text}</h3>
    );
}

export default Logo;