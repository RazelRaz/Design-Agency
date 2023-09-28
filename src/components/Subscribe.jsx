"use client"
import styles from './components.module.css'

const Subscribe = () => {
    return (
        <div className={styles.subscribeArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>SUBSCRIBE</h3>
                    <h2>Subscribe to get the latest<br></br> news about us</h2>
                    <div className={styles.extraPara}>
                        <p>Please drop your email below to get daily update about what we do</p>
                    </div>
                </div>
                <div className={styles.contentSubs}>
                    <div className={styles.subscribeBox}>
                        <div className={styles.formSubs}>
                            <input type="text" placeholder='Enter Your Email Adress' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;