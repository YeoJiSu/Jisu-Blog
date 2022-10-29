import { useRouter } from "next/dist/client/router";
import styles from "../../styles/Home.module.css";

import Header from '../../components/Header';
    
const Hobby = () => {
  const router = useRouter();
  
  // path로 전달받은 value 가져오기
  const { id } = router.query;
  
  return (
    <div>
        <Header/>
        <div className={styles.main}>
          <h1>{id} !</h1>
        </div>
    </div>
  )
};
export default Hobby;