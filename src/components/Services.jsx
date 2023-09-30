
import styles from './components.module.css'
import Image from 'next/image';
import ServiceOne from '../../public/images/service1.png'
import ServiceTwo from '../../public/images/service2.png'
import ServiceThree from '../../public/images/service3.png'

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
                            <div className={styles.servicesSingleImageBox}>
                                <div className={styles.servicesSingleImages}>
                                    <Image src={ServiceOne}  alt="Service" />
                                    <Image src={ServiceTwo}  alt="Service" />
                                </div>

                                <div className={styles.servicesSingleImages2}>
                                    <Image src={ServiceThree}  alt="Service" />
                                    <Image src={ServiceThree}  alt="Service" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                            <div className={styles.servicesSingleImageBox}>
                                <div className={styles.servicesSingleImages}>
                                    <Image src={ServiceOne}  alt="Service" />
                                    <Image src={ServiceTwo}  alt="Service" />
                                </div>

                                <div className={styles.servicesSingleImages2}>
                                    <Image src={ServiceThree}  alt="Service" />
                                    <Image src={ServiceThree}  alt="Service" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                            <div className={styles.servicesSingleImageBox}>
                                <div className={styles.servicesSingleImages}>
                                    <Image src={ServiceOne}  alt="Service" />
                                    <Image src={ServiceTwo}  alt="Service" />
                                </div>

                                <div className={styles.servicesSingleImages2}>
                                    <Image src={ServiceThree}  alt="Service" />
                                    <Image src={ServiceThree}  alt="Service" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.servicesSingle}>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                            </div>
                            <div className={styles.servicesSingleImageBox}>
                                <div className={styles.servicesSingleImages}>
                                    <Image src={ServiceOne}  alt="Service" />
                                    <Image src={ServiceTwo}  alt="Service" />
                                </div>

                                <div className={styles.servicesSingleImages2}>
                                    <Image src={ServiceThree}  alt="Service" />
                                    <Image src={ServiceThree}  alt="Service" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;