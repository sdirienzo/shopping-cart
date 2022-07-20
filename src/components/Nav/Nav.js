import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>
                    <Link to='/shop/sofas'>Sofas</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to='/shop/chairs'>Chairs</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to='/shop/coffee-tables'>Coffee Tables</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to='/shop/dressers'>Dressers</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to='/shop/lamps'>Lamps</Link>
                </li>
                <li className={styles.navLink}>Cart</li>
            </ul>
        </nav>
    );
}

export default Nav;