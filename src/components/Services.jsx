
import styles from './components.module.css'
import Image from 'next/image';
import HeroOne from '../../public/images/hero1.png'
import HeroTwo from '../../public/images/hero2.png'
import HeroThree from '../../public/images/hero3.png'
import HeroFour from '../../public/images/hero4.png'

const Services = () => {
    return (
        <div className={styles.servicesArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Our All Services</h3>
                    <h2>We Provide BestWeb design services</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.servicesWrapper}>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                                
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;