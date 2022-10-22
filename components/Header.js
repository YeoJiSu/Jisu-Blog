import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import img from "public/jisutagram.png";
import img2 from "public/jisutagramHover.png";
import you from "public/youtube.png";
import git from "public/github.png";
const linkStyle = {
    marginRight: '1rem'
}
const Header = () => {
    return (
        <div className={styles.head}>
            {/* <Link href="/"><a style={linkStyle}>JiSu</a></Link>
            <Link href="/https://github.com/YeoJiSu"><a style={linkStyle}>깃헙</a></Link>
            <Link href="/https://github.com/YeoJiSu"><a style={linkStyle}>깃헙</a></Link> */}
        <header className={styles.header}>
            <a href="/"> <Image src={img} alt="jisutagram" width={120} height={30}  /> </a>
            <ul className={styles.ul}>
                <li className={styles.li}> <a href="https://github.com/YeoJiSu"> <Image src={git} alt="Vercel Logo" width={35} height={35}  /> </a></li>
                <li className={styles.li}> <a href="https://velog.io/@diduya">V</a> </li>
                <li className={styles.li}> <a href=""> <Image src={you} alt="Vercel Logo" width={40} height={30}  /> </a></li>
            </ul>
        </header>

 
        </div>
    );
};

export default Header;