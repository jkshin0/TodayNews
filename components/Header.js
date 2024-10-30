import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>Escape.</div>
                <div className={styles.menu}>
                    <a href="#">HOME</a>
                    <a href="#">CATEGORIES</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </div>
            </nav>
            <div className={styles.heroContent}>
                <h1>Let's do it together.</h1>
                <p>We travel the world in search of stories. Come along for the ride.</p>
                <button>View Latest Posts</button>
            </div>
        </div>
    );
};

export default Header;
