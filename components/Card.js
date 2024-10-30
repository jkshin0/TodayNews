import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, content, author, date, category, imageUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                {imageUrl ? (
                    <div 
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                ) : (
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faMountain} className={styles.icon} />
                    </div>
                )}
                <span className={styles.category}>{category}</span>
            </div>
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.cardMeta}>
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
