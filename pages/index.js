import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
    const featuredPosts = [
        {
            title: "The Road Ahead",
            content: "The road ahead might be paved - it might not be.",
            author: "Mat Vogels",
            date: "September 25, 2015",
            category: "PHOTOGRAPHY",
            imageUrl: "/road-ahead.jpg"
        },
        {
            title: "From Top Down",
            content: "Once a year, go someplace you've never been before.",
            author: "William Wong",
            date: "September 25, 2015",
            category: "ADVENTURE",
            imageUrl: "/top-down.jpg"
        }
    ];

    const recentPosts = [
        {
            title: "Still Standing Tall",
            content: "Life begins at the end of your comfort zone.",
            author: "William Wong",
            date: "9/25/2015",
            category: "NATURE",
            imageUrl: "/standing-tall.jpg"
        },
        {
            title: "Sunny Side Up",
            content: "No place is ever as bad as they tell you it's going to be.",
            author: "Mat Vogels",
            date: "9/25/2015",
            category: "PHOTOGRAPHY",
            imageUrl: "/sunny-side.jpg"
        },
        {
            title: "Water Falls",
            content: "We travel not to escape life, but for life not to escape us.",
            author: "Mat Vogels",
            date: "9/25/2015",
            category: "RELAXATION",
            imageUrl: "/water-falls.jpg"
        },
        {
            title: "Through the Mist",
            content: "Travel makes you see what a tiny place you occupy in the world.",
            author: "William Wong",
            date: "9/25/2015",
            category: "VACATION",
            imageUrl: "/through-mist.jpg"
        },
        {
            title: "Awaken Early",
            content: "Not all those who wander are lost.",
            author: "Mat Vogels",
            date: "9/25/2015",
            category: "VACATION",
            imageUrl: "/awaken-early.jpg"
        },
        {
            title: "Try it Always",
            content: "The world is a book, and those who do not travel read only one page.",
            author: "Mat Vogels",
            date: "9/25/2015",
            category: "TRAVEL",
            imageUrl: "/try-it-always.jpg"
        }
    ];

    return (
        <div>
            <Header />
            <CategoryNav />
            <main className={styles.main}>
                <h2 className={styles.sectionTitle}>Featured Posts</h2>
                <div className={styles.featuredGrid}>
                    {featuredPosts.map((post, index) => (
                        <Card key={index} {...post} />
                    ))}
                </div>
                <h2 className={styles.sectionTitle}>Most Recent</h2>
                <div className={styles.recentGrid}>
                    {recentPosts.map((post, index) => (
                        <Card key={index} {...post} />
                    ))}
                </div>
            </main>
        </div>
    );
}
