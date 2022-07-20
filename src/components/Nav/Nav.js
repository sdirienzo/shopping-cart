import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>Home</li>
                <li className={styles.navLink}>
                    <Link to='/shop/chairs'>Shop</Link>
                </li>
                <li className={styles.navLink}>Cart</li>
            </ul>
        </nav>
    );
}

export default Nav;