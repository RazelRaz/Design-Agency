import styles from './components.module.css'
import Image from 'next/image';
import Stat1 from '../../public/images/stat1.png'
import Stat2 from '../../public/images/stat2.png'
import Stat3 from '../../public/images/stat3.png'
import Stat4 from '../../public/images/stat4.png'

const Stats = () => {
    return (
        <div className={styles.statsArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.stats}>
                        <div className={styles.statSingle}>
                            <Image src={Stat1} alt="Stat" />
                            <h2>240452</h2>
                            <p>Followers</p>
                        </div>
                        <div className={styles.statSingle}>
                            <Image src={Stat2} alt="Stat" />
                            <h2>240452</h2>
                            <p>Followers</p>
                        </div>
                        <div className={styles.statSingle}>
                            <Image src={Stat3} alt="Stat" />
                            <h2>240452</h2>
                            <p>Followers</p>
                        </div>
                        <div className={styles.statSingle}>
                            <Image src={Stat4} alt="Stat" />
                            <h2>240452</h2>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;