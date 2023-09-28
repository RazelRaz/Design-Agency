import Link from 'next/link';
import styles from './components.module.css'
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = () => {
    return (
        <div className={styles.breadcrumbArea}>
            <div className={styles.container}>
                <h2>Team</h2>
                <div className={styles.content}>
                    <div className={styles.breadcrumb}>
                        <ul>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><FaAngleRight /></li>
                            <li className={styles.brdActive}><Link href={'/team'}>Team</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;