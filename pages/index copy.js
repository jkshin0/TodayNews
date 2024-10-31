import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/sheets');
                const data = await response.json();
                if (data.status === 'success') {
                    setPosts(data.data);
                }
            } catch (error) {
                console.error('데이터 불러오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    const featuredPosts = posts.slice(0, 2);
    const recentPosts = posts.slice(2, 8);

    return (
        <div>
            <Header />
            <CategoryNav />
            <main className={styles.main}>
                <h2 className={styles.sectionTitle}>주요 포스트</h2>
                <div className={styles.featuredGrid}>
                    {featuredPosts.map((post, index) => (
                        <Card 
                            key={index}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                            date={post.date}
                            category={post.category}
                            imageUrl={post.imageUrl}
                        />
                    ))}
                </div>
                <h2 className={styles.sectionTitle}>최신 포스트</h2>
                <div className={styles.recentGrid}>
                    {recentPosts.map((post, index) => (
                        <Card 
                            key={index}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                            date={post.date}
                            category={post.category}
                            imageUrl={post.imageUrl}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
