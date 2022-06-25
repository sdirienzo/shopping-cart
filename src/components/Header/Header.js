import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header({ logoText }) {
    return (
        <header className={styles.header}>
            <Logo text={logoText} />
            <Nav />
        </header>  
    );
}

export default Header;