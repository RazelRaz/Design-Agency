"use client"
import styles from './components.module.css'
import Image from 'next/image';
import LogoImg from '../../public/images/DesignAGENCY.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
const SiteNavbar = () => {

    let currentPath = usePathname();
    const [isNavShowing, setIsNavSHowing] = useState(false)

    return (
        <nav className={styles.navArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navAreaLogo}>
                        <Link href={'/'}><Image src={LogoImg}  alt="Logo" /></Link>
                        
                    </div>
                    <div className={styles.navAreaMainMenu}>
                        <ul className={`navLinks ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={currentPath === '/' ? 'active' : ''} href={"/"}>Home</Link>
                            <Link className={currentPath === '/team' ? 'active' : ''} 
                            href={"/team"}>
                                Team
                            </Link>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={currentPath === '/services' ? 'active' : ''} href={"/services"}>Services</Link>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={currentPath === '/projects' ? 'active' : ''} href={"/projects"}>Projects</Link>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={currentPath === '/testimonials' ? 'active' : ''} href={"/testimonials"}>Testimonials</Link>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={styles.menLogin} href={'#'}>Login</Link>
                            <Link  onClick={() => setIsNavSHowing(prev => !prev)} className={styles.menSign} href={'#'}>Sign Up</Link>
                            
                        </ul>
                    </div>
                    <div className={styles.mobMenu}>
                        <p><FaBars ></FaBars></p>
                        <ul className={styles.mobMenuLinks}>
                            <Link href={"/services"}>services</Link>
                            <Link href={"/projects"}>projects</Link>
                            <Link href={"/testimonials"}>Testimonials</Link>
                            <Link href={"#"}>Login</Link>
                            <Link href={"#"}>Sign Up</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SiteNavbar;