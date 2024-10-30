import styles from './CategoryNav.module.css';

const CategoryNav = () => {
    return (
        <nav className={styles.categoryNav}>
            <a href="#">Nature</a>
            <a href="#">Photography</a>
            <a href="#">Relaxation</a>
            <a href="#">Vacation</a>
            <a href="#">Travel</a>
            <a href="#">Adventure</a>
        </nav>
    );
};

export default CategoryNav;
