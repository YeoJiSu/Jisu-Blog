import styles from "../styles/Home.module.css";
import Image from "next/image";
import img from "public/jisutagram.png";
import you from "public/youtube.png";
import git from "public/github.png";
import img3 from "public/start.jpg";

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
    </div>
    );
};

export default Header;