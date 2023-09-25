import React from 'react';
import styles from './components.module.css'

const Hero = () => {
    return (
        <div className={styles.heroArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heroAreaLeft}></div>
                    <div className={styles.heroAreaRight}></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;