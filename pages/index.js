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
                const result = await response.json();
                
                // 데이터 구조 확인 및 처리
                let postsData = [];
                if (result.status === 'success') {
                    // data 객체가 있고 배열인지 확인
                    if (result.data && Array.isArray(result.data)) {
                        postsData = result.data;
                    } else if (result.data && Array.isArray(result.data.data)) {
                        postsData = result.data.data;
                    }
                }
                
                // 유효한 데이터만 필터링
                const validPosts = postsData.filter(post => 
                    post && typeof post === 'object' && post.title
                );

                setPosts(validPosts);
                
                // 데이터 구조 확인을 위한 로그
                console.log('Fetched data:', result);
                console.log('Processed posts:', validPosts);
                
            } catch (error) {
                console.error('데이터 불러오기 실패:', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className={styles.loading}>로딩 중...</div>;
    }

    // posts가 비어있는 경우 처리
    if (!Array.isArray(posts) || posts.length === 0) {
        return <div className={styles.loading}>데이터가 없습니다.</div>;
    }

    return (
        <div>
            <Header />
            <CategoryNav />
            <main className={styles.main}>
                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <Card 
                            key={index}
                            date={post.date || '날짜 없음'}
                            title={post.title || '제목 없음'}
                            content={post.content || '내용 없음'}
                            category={post.category || '카테고리 없음'}
                            imageUrl={post.imageUrl || '🔍'}
                            link={post.link || '#'}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
