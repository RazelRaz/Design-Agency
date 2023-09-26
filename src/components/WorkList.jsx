import styles from './components.module.css'
// import Image from 'next/image';
// import BrandImg from '../../public/images/Slack.png'

const WorkList = () => {
    return (
        <div className={styles.workListsArea}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.themeTitleBox}>
                        <h3>Work List</h3>
                        <h2>We provide the Perfect Solution to your business growth</h2>
                    </div>
                    <div className={styles.workLists}>
                        <div className={styles.singleWorkList}>
                            
                        </div>
                        <div className={styles.singleWorkList}></div>
                        <div className={styles.singleWorkList}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;