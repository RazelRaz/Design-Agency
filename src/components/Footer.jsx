import styles from './components.module.css'
import Image from 'next/image';
import FootLogo from '../../public/images/log.png'
import Social from '../../public/images/social.png'

const Footer = () => {
    return (
        <div className={styles.footerArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.footerBox}>
                        <div className={styles.footerTop}>
                            <div className={styles.footerLogo}>
                                <Image src={FootLogo} alt="Logo" />
                            </div>
                            
                            <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                            <Image src={Social} alt="icons" />
                        </div>
                        <div className={styles.footerMiddle}>
                            <div className={styles.footerMiddleBox}>
                                <h6>Quick Links</h6>
                                <ul>
                                    <li>Services</li>
                                    <li>Portfolio</li>
                                    <li>About Us </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerBottom}>
                            <div className={styles.footerMiddleBox}>
                                <h6>Address</h6>
                                <p>Design Agency Head Office.<br />
                                    Airport Road<br />
                                    United Arab Emirate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;


