import styles from './components.module.css'
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import TeamImg from '../../public/images/team.jpg'
import { async } from './../app/testimonials/layout';

async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/TeamList")

    if(!res.ok){
        throw new Error("TeamList Area Project Calling Failed")
    }
    return res.json();
}

const Team = async () => {
    const data = await getData()
    return (
        <div className={styles.teamArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Our Team Member</h3>
                    <h2>Check our awesome team members</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.teamBox}>

                            {
                                data.map((singleData, i) => {
                                    return (
                                        
                                        <div className={styles.singleTeam}>
                            <div className={styles.singlewrapper}>
                                <div className={styles.teamSocial}>
                                    <img src={singleData['image']} alt="" srcset="" />
                                    <ul>
                                        <li><Link href={singleData['facebook']}><FaFacebookF /></Link></li>
                                        <li><Link href={singleData['twitter']}><FaTwitter /></Link></li>
                                        <li><Link href={singleData['instagram']}><FaInstagram /></Link></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className={styles.teamAuthor}>
                                <h2>{singleData['name']}</h2>
                            </div>
                        </div>
                                    )
                                })
                            }

                        


                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;