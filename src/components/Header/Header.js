import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>  
    );
}

export default Header;