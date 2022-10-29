import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout';
import { useRouter } from "next/dist/client/router";
const Hobby: NextPage = () => {

  const router = useRouter();

  return (
    <Layout>
      <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.grid}>
      
        <button className = {styles.btn} onClick={()=>router.push('/hobby/horse-riding')}>🏇🏻</button>
        <button className = {styles.btn} onClick={()=>router.push('/hobby/drawing')}>🎨</button>
        <button className = {styles.btn} onClick={()=>router.push('/hobby/baking')}>👩🏻‍🍳</button>
        <button className = {styles.btn} onClick={()=>router.push('/hobby/playing-piano')}>🎹</button>
        <button className = {styles.btn} onClick={()=>router.push('/hobby/taking-photos')}>📸</button>


        
      </div>
      </main>
      </div>
    </Layout>
  );
};

export default Hobby;
