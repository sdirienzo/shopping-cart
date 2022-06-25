import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>Home</li>
                <li className={styles.navLink}>Shop</li>
                <li className={styles.navLink}>Cart</li>
            </ul>
        </nav>
    );
}

export default Nav;