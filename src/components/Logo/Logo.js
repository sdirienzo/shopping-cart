import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
    return (
        <h3 className={styles.logo}>
            <Link to='/'>gather<span className={styles.logoDot}>.</span></Link>
        </h3>
    );
}

export default Logo;