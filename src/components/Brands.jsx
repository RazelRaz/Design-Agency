import styles from './components.module.css'
import Image from 'next/image';
import BrandImg from '../../public/images/Slack.png'

const Brands = () => {
    return (
        <div>
            <div className={styles.brandsArea}>
                <div className={styles.brandsAreaImages}>
                    <Image src={BrandImg} alt="Brands" />
                    <Image src={BrandImg} alt="Brands" />
                    <Image src={BrandImg} alt="Brands" />
                    <Image src={BrandImg} alt="Brands" />
                    
                </div>
            </div>
        </div>
    );
};

export default Brands;