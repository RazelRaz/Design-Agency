"use client"
import styles from './components.module.css'
import Image from 'next/image';
import LogoImg from '../../public/images/DesignAGENCY.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const SiteNavbar = () => {

    let currentPath = usePathname();

    return (
        <nav className={styles.navArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navAreaLogo}>
                        <Image src={LogoImg}  alt="Logo" />
                    </div>
                    <div className={styles.navAreaMainMenu}>
                        <ul>
                            <Link className={currentPath === '/' ? 'active' : ''} href={"/"}>Home</Link>
                            <Link className={currentPath === '/team' ? 'active' : ''} 
                            href={"/team"}>
                                Team
                            </Link>
                            <Link className={currentPath === '/services' ? 'active' : ''} href={"/services"}>Services</Link>
                            <Link className={currentPath === '/projects' ? 'active' : ''} href={"/projects"}>Projects</Link>
                            <Link className={currentPath === '/testimonials' ? 'active' : ''} href={"/testimonials"}>Testimonials</Link>
                            <Link className={styles.menLogin} href={'#'}>Login</Link>
                            <Link className={styles.menSign} href={'#'}>Sign Up</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SiteNavbar;