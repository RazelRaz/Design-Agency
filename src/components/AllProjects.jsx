import styles from './components.module.css'
import Image from 'next/image';
import AllPorject from '../../public/images/allproject.png'

const AllProjects = () => {
    return (
        <div className={styles.allProjectsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>All Projects</h3>
                    <h2>Better Agency/SEO Solution At Your Fingertips</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.servicesWrapper}>
                        
                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={AllPorject}  alt="All Porject" />
                            </div>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                                <p>Backend Developer</p>
                            </div>

                        </div>

                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={AllPorject}  alt="All Porject" />
                            </div>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                            </div>

                        </div>

                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={AllPorject}  alt="All Porject" />
                            </div>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                            </div>

                        </div>

                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={AllPorject}  alt="All Porject" />
                            </div>
                            <div className={styles.servicesSingleBox}>
                                <h2>Build & Launch without problems</h2>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;