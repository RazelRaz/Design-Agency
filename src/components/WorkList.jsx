import styles from './components.module.css'
import Image from 'next/image';
import Active from '../../public/images/activity.png'
import Heart from '../../public/images/heart.png'
import Work from '../../public/images/work.png'
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/WorkList")

    if(!res.ok){
        throw new Error("workLists Area Project Calling Failed")
    }
    return res.json();
}



const WorkList = async () => {

    const data = await getData()

    return (
        <div className={styles.workListsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Work List</h3>
                    <h2>We provide the Perfect Solution to your business growth</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.workLists}>


                            {
                                data.map((singleData, i) => {
                                    return (
                                        <div className={styles.singleWorkList}>
                                            <div className={styles.singleWorkListBox}>
                                                <Image src={Active} alt="Active" />
                                                <h2>{singleData['title']}</h2>
                                                <p>{singleData['des']}</p>
                                                <div className={styles.singleWorkListLink}>
                                                    <Link href={'/services'}>Learn More <FaLongArrowAltRight /></Link>
                                                </div>
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

export default WorkList;