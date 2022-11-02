import { useRouter } from "next/dist/client/router";
import styles from "../../styles/Home.module.css";

import Header from '../../components/Header';
import Image from "next/image";
const Hobby = () => {
  const router = useRouter();
  
  // path로 전달받은 value 가져오기
  const { id } = router.query;

  let img = "";
  let result = ".png"

  const printImg = (str:String) =>{
    result = str + result; // 필요없음
    for 
  }


  if (id == "1") {
    img = "/jisu.png";
    printImg(id)
}


  let jiji = '<div class="homepsage">This is the homepage data</div>';

  return (
    <div>
        <Header/>
        <div className={styles.main}>
          <h1>{id} {img}!</h1>
          <Image src={img} alt="img" width={150} height={150}  />
          <Image src={result} alt="img" width={150} height={150}  />
          <div className="text-container" dangerouslySetInnerHTML={{__html: jiji}} />
        </div>
    </div>
  )
};
export default Hobby;