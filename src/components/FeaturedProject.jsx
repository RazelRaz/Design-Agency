import styles from './components.module.css'
import Image from 'next/image';
import FProject1 from '../../public/images/fproject.jpg'
import FProject2 from '../../public/images/fproject2.png'

const FeaturedProject = () => {
    return (
        <div className={styles.featuredProjectARea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Featured Project</h3>
                    <h2>We provide the Perfect Solution to your business growth</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.featuredProjectLeft}>
                        <div className={styles.featuredProjectLeftBox}>
                            <Image src={FProject1} alt="Active" />
                            <p>App Design - June 20, 2022</p>
                            <h3>App Redesign</h3>
                        </div>
                    </div>
                    <div className={styles.featuredProjectRight}>
                        <div className={styles.featuredProjectRightTop}>
                            <div className={styles.singlefeaturedProject}>
                                <Image src={FProject2} alt="Active" />
                                <p>App Design - June 20, 2022</p>
                                <h3>App Redesign</h3>
                            </div>
                            <div className={styles.singlefeaturedProject}>
                                <Image src={FProject2} alt="Active" />
                                <p>App Design - June 20, 2022</p>
                                <h3>App Redesign</h3>
                            </div>
                        </div>
                        <div className={styles.featuredProjectRightBottom}>
                            <div className={styles.singlefeaturedProject}>
                                <Image src={FProject2} alt="Active" />
                                <p>App Design - June 20, 2022</p>
                                <h3>App Redesign</h3>
                            </div>
                            <div className={styles.singlefeaturedProject}>
                                <Image src={FProject2} alt="Active" />
                                <p>App Design - June 20, 2022</p>
                                <h3>App Redesign</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;