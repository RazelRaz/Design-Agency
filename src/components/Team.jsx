import styles from './components.module.css'
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import TeamImg from '../../public/images/team.jpg'

const Team = () => {
    return (
        <div className={styles.teamArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Our Team Member</h3>
                    <h2>Check our awesome team members</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.teamBox}>

                        <div className={styles.singleTeam}>
                            <div className={styles.singlewrapper}>
                                <div className={styles.teamSocial}>
                                    <Image src={TeamImg} alt="Team" />
                                    <ul>
                                        <li><Link href={'/'}><FaFacebookF /></Link></li>
                                        <li><Link href={'/'}><FaTwitter /></Link></li>
                                        <li><Link href={'/'}><FaInstagram /></Link></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className={styles.teamAuthor}>
                                <h2>Devon Lane</h2>
                            </div>
                        </div>


                        <div className={styles.singleTeam}>
                            <div className={styles.singlewrapper}>
                                <div className={styles.teamSocial}>
                                    <Image src={TeamImg} alt="Team" />
                                    <ul>
                                        <li><Link href={'/'}><FaFacebookF /></Link></li>
                                        <li><Link href={'/'}><FaTwitter /></Link></li>
                                        <li><Link href={'/'}><FaInstagram /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.teamAuthor}>
                                <h2>Devon Lane</h2>
                            </div>
                        </div>
                        <div className={styles.singleTeam}>
                            <div className={styles.singlewrapper}>
                                <div className={styles.teamSocial}>
                                    <Image src={TeamImg} alt="Team" />
                                    <ul>
                                        <li><Link href={'/'}><FaFacebookF /></Link></li>
                                        <li><Link href={'/'}><FaTwitter /></Link></li>
                                        <li><Link href={'/'}><FaInstagram /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.teamAuthor}>
                                <h2>Devon Lane</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;