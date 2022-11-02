import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout';


const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <main className={styles.main}>
      
        <div className={styles.grid}>
          <a href="https://github.com/YeoJiSu" className={styles.card}>
            <h2>🐱 Github &rarr;</h2>
            <p> Repositories of contents that I learned and practiced in PNU and Toy projects.</p>
          </a>

          <a href="https://velog.io/@diduya" className={styles.card}>
            <h2>🍀 Velog &rarr;</h2>
            <p>My Personal Software Engineering blog that records what I have studied, the process of solving issues, etc.</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCzjT4g6JGcuvsns7EIYHUwQ"
            className={styles.card}
          >
            <h2>📹 YouTube &rarr;</h2>
            <p> My YouTube channel that I plan, film, edit, and upload videos myself. I'm making a video with the main contents of my daily life studying SoftWare.</p>
          </a>

          <a href="/hobby" className={styles.card}>
            <h2>🤷🏻‍♀️ Hobby &rarr;</h2>
            <p> I have hobbies such as horseback riding, baking, drawing, photography, and playing the piano. </p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>

    </div>
    </Layout>
  );
};

export default Home;
