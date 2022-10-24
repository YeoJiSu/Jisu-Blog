import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img from "public/jisu.png";
import img2 from "public/network.png";
import img3 from "public/start.jpg";
import Layout from '../components/Layout';


const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <main className={styles.main}>
      
        <div className={styles.grid}>
          <a href="https://github.com/YeoJiSu" className={styles.card}>
            <h2>🐱 Github &rarr;</h2>
            <p>대학교에서 배우고, 실습한 내용들과 토이 프로젝트들을 정리해둔 저장소 입니다.</p>
          </a>

          <a href="https://velog.io/@diduya" className={styles.card}>
            <h2>🍀 Velog &rarr;</h2>
            <p>공부한 내용들, 이슈 해결 과정 등을 기록하는 개인 기술 블로그 입니다.</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCzjT4g6JGcuvsns7EIYHUwQ"
            className={styles.card}
          >
            <h2>📹 YouTube &rarr;</h2>
            <p>기획/촬영/편집 모두 직접하며 SW 공부를 하는 일상 내용을 주된 컨텐츠로 영상을 제작하고 있습니다.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>📧 Contact &rarr;</h2>
            <p>
            📭 yeoji1503@gmail.com<br></br>
            📭 duwltn1301@pusan.ac.kr
            📭 duwltn1301@naver.com
            </p>
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
