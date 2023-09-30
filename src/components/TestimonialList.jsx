import styles from './components.module.css'
import Image from 'next/image';
import Testimonial from '../../public/images/testimonial.png'

const TestimonialList = () => {
    return (
        <div className={styles.testimonialsArea}>
            <div className={styles.container}>
                <div className={styles.themeTitleBox}>
                    <h3>Testimonial List</h3>
                    <h2>Better Agency/SEO Solution At Your Fingertips</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.servicesWrapper}>
                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={Testimonial}  alt="Testimonial" />
                            </div>

                            <div className={styles.servicesSingleBox}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <h2>John Done</h2>
                                <p className={styles.servicesSingleBoxPtwo}>Web Developer</p>
                            </div>

                        </div>

                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={Testimonial}  alt="Testimonial" />
                            </div>

                            <div className={styles.servicesSingleBox}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <h2>John Done</h2>
                                <p className={styles.servicesSingleBoxPtwo}>Web Developer</p>
                            </div>

                        </div>

                        <div className={styles.servicesSingle}>
                            
                            <div className={styles.servicesSingleImageBox}>
                                <Image src={Testimonial}  alt="Testimonial" />
                            </div>

                            <div className={styles.servicesSingleBox}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <h2>John Done</h2>
                                <p className={styles.servicesSingleBoxPtwo}>Web Developer</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialList;