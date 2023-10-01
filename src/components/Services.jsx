
import styles from './components.module.css'
import Image from 'next/image';
import ServiceOne from '../../public/images/service1.png'
import ServiceTwo from '../../public/images/service2.png'
import ServiceThree from '../../public/images/service3.png'


async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/AllService")

    if(!res.ok){
        throw new Error("AllService Area Project Calling Failed")
    }
    return res.json();
}


const Services = async () => {

    const data = await getData()

    return (
        <div className={styles.servicesArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Our All Services</h3>
                    <h2>We Provide BestWeb design services</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.servicesWrapper}>


                            {
                                data.map((singleData, i) => {
                                    return (
                                        
                                        <div className={styles.servicesSingle}>
                                            <div className={styles.servicesSingleBox}>
                                                <h2>{singleData['title']}</h2>
                                                <p>{singleData['des']}</p>
                                            </div>
                                            <div className={styles.servicesSingleImageBox}>
                                                <div className={styles.servicesSingleImages}>
                                                    <img src={singleData['image1']} alt="" srcset="" />
                                                    <img src={singleData['image2']} alt="" srcset="" />
                                                </div>

                                                <div className={styles.servicesSingleImages2}>
                                                <img src={singleData['image3']} alt="" srcset="" />
                                                <img src={singleData['image4']} alt="" srcset="" />
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

export default Services;