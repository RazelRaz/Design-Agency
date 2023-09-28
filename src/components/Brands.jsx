import styles from './components.module.css'
import Image from 'next/image';
import BrandImg from '../../public/images/Slack.png'
import Trello from '../../public/images/trello.png'
import Monday from '../../public/images/monday.png'
import Notion from '../../public/images/notion.png'
import Google from '../../public/images/google.png'

const Brands = () => {
    return (
        <div>
            <div className={styles.brandsArea}>
                <div className={styles.brandsAreaImages}>
                    <Image src={Google} alt="Brands" />
                    <Image src={Trello} alt="Brands" />
                    <Image src={Monday} alt="Brands" />
                    <Image src={Notion} alt="Brands" />
                    <Image src={BrandImg} alt="Brands" />
                </div>
            </div>
        </div>
    );
};

export default Brands;