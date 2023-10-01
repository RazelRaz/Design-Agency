import styles from './components.module.css'
import Image from 'next/image';
import AllPorject from '../../public/images/allproject.png'

async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/AllProject")

    if(!res.ok){
        throw new Error("AllProject Area Project Calling Failed")
    }
    return res.json();
}

const AllProjects = async () => {
    const data = await getData()
    return (
        <div className={styles.allProjectsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>All Projects</h3>
                    <h2>Better Agency/SEO Solution At Your Fingertips</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.servicesWrapper}>
                        
                            {
                                data.map((singleData, i) => {
                                    return (
                                        
                                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <img src={singleData['image']} alt="" srcset="" />
                            </div>
                            <div className={styles.servicesSingleBox}>
                                <h2>{singleData['title']}</h2>
                                <p>Backend Developer</p>
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

export default AllProjects;