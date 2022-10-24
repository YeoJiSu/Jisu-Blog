import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
const Study: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.grid}>
        <iframe  width="300" height="300" id="big" src="https://velog.io/@diduya/series/%EC%A7%80%EB%8A%A5%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C"></iframe>
        <iframe  width="300" height="300"id="big" src="https://velog.io/@diduya/series/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%A7%88%EC%9D%B4%EB%8B%9D"></iframe>
        <iframe  width="300" height="300"id="big" src="https://velog.io/@diduya/series/%EB%B0%B1%EC%A4%80"></iframe>
        <iframe  width="300" height="300"id="big" src="https://velog.io/@diduya/series/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D"></iframe>
        <iframe  width="300" height="300"id="big" src="https://velog.io/@diduya/series/Git"></iframe>
        <iframe  width="300" height="300"id="big" src="https://velog.io/@diduya/series/MySQL-strapi-Postman"></iframe>
      </div>
      </main>
      </div>
    </Layout>
    
  );
};

export default Study;
