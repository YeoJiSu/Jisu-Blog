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
                    <a href=""> <Image src={img} className={styles.logo} alt="jisutagram" width={120} height={30}  /> </a>
                    <ul className={styles.ul}>
                        <li className={styles.li}> <a href="https://github.com/YeoJiSu"> <Image src={git} alt="Vercel Logo" width={35} height={35}  /> </a></li>
                        <li className={styles.li}> <a href="https://velog.io/@diduya">V</a> </li>
                        <li className={styles.li}> <a href="https://www.youtube.com/channel/UCzjT4g6JGcuvsns7EIYHUwQ"> <Image src={you} alt="Vercel Logo" width={40} height={30}  /> </a></li>
                        <li className={styles.li}> <a href="https://www.youtube.com/channel/UCzjT4g6JGcuvsns7EIYHUwQ"> <Image className={styles.img3} src={img3} alt="Vercel Logo" width={40} height={40}  /> </a></li>
                    </ul>
                </div>
            </header>
        <div className={styles.header2}>
            <div className={styles.div1}>
                <div className={styles.div2}>
                  <Image className={styles.img3} src={img3} alt="Vercel Logo" width={170} height={170}  />
                </div> 
                <div className={styles.div3}>
                  <p className= {styles.div4}>
                    jisu Yeo
                  </p>
                  <p className={styles.div5}>
                    저는 현재 부산대학교 3학년 2학기를 재학 중입니다. <br></br>
                    새로운 기술들을 사용해 보는 걸 좋아하고, <br></br>
                   그 기술들로 많은 사람들에게 도움을 주고 싶어합니다. 
                  </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;