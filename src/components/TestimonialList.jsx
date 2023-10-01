import styles from './components.module.css'
import Image from 'next/image';
import Testimonial from '../../public/images/testimonial.png'
import { async } from './../app/testimonials/layout';

async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/TestimonialList")

    if(!res.ok){
        throw new Error("TestimonialList Area Project Calling Failed")
    }
    return res.json();
}

const TestimonialList = async () => {
    const data = await getData()
    return (
        <div className={styles.testimonialsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Testimonial List</h3>
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
                                            <p>{singleData['msg']}</p>
                                            <h2>{singleData['name']}</h2>
                                            <p className={styles.servicesSingleBoxPtwo}>{singleData['designation']}</p>
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

export default TestimonialList;