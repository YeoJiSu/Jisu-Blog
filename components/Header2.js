import styles from "../styles/Home.module.css";
import Image from "next/image";
import img3 from "public/start.jpg";

const Header = () => {
    return (
        <div className={styles.header2}>
            <div className={styles.div1}>
              
                <div className={styles.div2}>
                  <a href="/"> 
                    <Image className={styles.img3} src={img3} alt="jisu" width={150} height={150}  />
                  </a>
                </div> 
                <div className={styles.div3}>
                  <p className= {styles.div4}>
                    jisu Yeo
                  </p>
                  <p className={styles.div5}>
                    <a href="https://www.notion.so/Jisu-Yeo-e96cc8aa907c4bda946831f855adf6ac"> 
                      Portfolio
                    </a>
                  </p>
                  
                  <p className={styles.div6}>
                    <a href="mailto:duwltn1301@pusan.ac.kr">
                    📭 duwltn1301@pusan.ac.kr
                    </a>
                  </p>
                  <p className={styles.div6}>
                    📱 010-2542-3650
                  </p>
                </div>
            </div>
        </div>
    );
};

export default Header;