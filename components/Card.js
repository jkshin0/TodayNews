import styles from './Card.module.css';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const Card = ({ date, title, content, category, imageUrl, link }) => {
    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {
        // 랜덤 그라데이션 색상 생성
        const colors = [
            'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
            'linear-gradient(135deg, #4ECDC4, #45B7AF)',
            'linear-gradient(135deg, #9B59B6, #8E44AD)',
            'linear-gradient(135deg, #3498DB, #2980B9)',
            'linear-gradient(135deg, #1ABC9C, #16A085)',
            'linear-gradient(135deg, #F1C40F, #F39C12)',
            'linear-gradient(135deg, #E74C3C, #C0392B)',
            'linear-gradient(135deg, #2ECC71, #27AE60)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
    }, []);

    const handleClick = () => {
        Swal.fire({
            title,
            html: `
                <div style="text-align: left; margin-top: 20px;">
                    <p style="font-size: 1.2em; line-height: 1.6;">${content}</p>
                    <p style="margin-top: 20px;">
                        <a href="${link}" target="_blank" style="color: #007bff;">원본 기사 보기</a>
                    </p>
                </div>
            `,
            imageUrl: imageUrl,
            imageWidth: 100,
            imageHeight: 100,
            confirmButtonColor: '#3085d6',
            showCloseButton: true,
            width: '600px'
        });
    };

    return (
        <div 
            className={styles.card} 
            onClick={handleClick}
            style={{ background: backgroundColor }}
        >
            <div className={styles.cardHeader}>
                <span className={styles.category}>{category}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.emojiContainer}>
                <span className={styles.emoji}>{imageUrl}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
};

export default Card;
