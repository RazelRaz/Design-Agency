import React from 'react';
import styles from './components.module.css'
import Image from 'next/image';
import HeroOne from '../../public/images/hero1.png'
import HeroTwo from '../../public/images/hero2.png'
import HeroThree from '../../public/images/hero3.png'
import HeroFour from '../../public/images/hero4.png'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className={styles.heroArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heroAreaLeft}>
                        <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                        <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
                        <div className={styles.heroBtn}>
                            <Link href={'/services'}>Get Started</Link>
                        </div>
                    </div>
                    <div className={styles.heroAreaRight}>
                        <div className={styles.heroAreaRightTop}>
                            <Image src={HeroOne}  alt="Hero" />
                            <Image src={HeroTwo}  alt="Hero" />
                        </div>
                        <div className={styles.heroAreaRightBottom}>
                            <Image src={HeroThree}  alt="Hero" />
                            <Image src={HeroFour}  alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;