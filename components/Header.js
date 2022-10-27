import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import img from "public/jisutagram.png";
import you from "public/youtube.png";
import git from "public/github.png";
import img3 from "public/start.jpg";
const linkStyle = {
    marginRight: '1rem'
}
const Header = () => {
    return (
       
    <div>
        <header className={styles.header}>
            <div class = {styles.head}>
                <a href="/"> <Image src={img} className={styles.logo} alt="jisutagram" width={120} height={30}  /> </a>
                <ul className={styles.ul}>
                    <li className={styles.li}> <a href="https://github.com/YeoJiSu"> <Image src={git} alt="Vercel Logo" width={35} height={35}  /> </a></li>
                    <li className={styles.li}> <a href="https://velog.io/@diduya">V</a> </li>
                    <li className={styles.li}> <a href="https://www.youtube.com/channel/UCzjT4g6JGcuvsns7EIYHUwQ"> <Image src={you} alt="Vercel Logo" width={40} height={30}  /> </a></li>
                    <li className={styles.li}> <a href="/"> <Image className={styles.img3} src={img3} alt="Vercel Logo" width={40} height={40}  /> </a></li>
                </ul>
            </div>
        </header>
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
                    📭 duwltn1301@pusan.ac.kr
                  </p>
                  <p className={styles.div6}>
                    📱 010-0000-0000
                  </p>
                </div>
            </div>
        </div>
       
    </div>
    );
};

export default Header;