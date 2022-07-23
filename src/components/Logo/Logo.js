import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
    return (
        <h3 className={styles.logo}>
            <Link to='/'>gather.</Link>
        </h3>
    );
}

export default Logo;