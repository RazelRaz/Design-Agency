import styles from './components.module.css'
import Image from 'next/image';
import HeroOne from '../../public/images/hero1.png'
import HeroTwo from '../../public/images/hero2.png'
import HeroThree from '../../public/images/hero3.png'
import HeroFour from '../../public/images/hero4.png'
import Link from 'next/link';


async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/HeroList")

    if(!res.ok){
        throw new Error("Hero Calling Failed")
    }
    return res.json();
}


const Hero = async () => {
    const data = await getData()

    return (
        <div className={styles.heroArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heroAreaLeft}>
                        <h1>{data['title']}</h1>
                        <p>{data['description']}</p>
                        <div className={styles.heroBtn}>
                            <Link href={'/services'}>Get Started </Link>
                        </div>
                    </div>
                    <div className={styles.heroAreaRight}>
                        <div className={styles.heroAreaRightTop}>
                            <img src={data['image1']} alt="" srcset="" />
                            <img src={data['image2']} alt="" srcset="" />
                        </div>
                        <div className={styles.heroAreaRightBottom}>
                            <img src={data['image3']} alt="" srcset="" />
                            <img src={data['image4']} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;