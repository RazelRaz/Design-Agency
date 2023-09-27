import styles from './components.module.css'
import Image from 'next/image';
import Active from '../../public/images/activity.png'
import Heart from '../../public/images/heart.png'
import Work from '../../public/images/work.png'
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const WorkList = () => {
    return (
        <div className={styles.workListsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Work List</h3>
                    <h2>We provide the Perfect Solution to your business growth</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.workLists}>
                        <div className={styles.singleWorkList}>
                            <div className={styles.singleWorkListBox}>
                                <Image src={Active} alt="Active" />
                                <h2>Grow Your Business</h2>
                                <p>We help identify the best ways to improve your business</p>
                                <div className={styles.singleWorkListLink}>
                                    <Link href={'/services'}>Learn More <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleWorkList}>
                            <div className={styles.singleWorkListBox}>
                                <Image src={Heart} alt="Active" />
                                <h2>Grow Your Business</h2>
                                <p>We help identify the best ways to improve your business</p>
                                <div className={styles.singleWorkListLink}>
                                    <Link href={'/services'}>Learn More <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleWorkList}>
                            <div className={styles.singleWorkListBox}>
                                <Image src={Work} alt="Active" />
                                <h2>Grow Your Business</h2>
                                <p>We help identify the best ways to improve your business</p>
                                <div className={styles.singleWorkListLink}>
                                    <Link href={'/services'}>Learn More <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;