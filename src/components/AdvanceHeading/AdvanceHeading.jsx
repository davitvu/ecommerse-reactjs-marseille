import MainLayout from '@components/Layout/MainLayout.jsx';

import styles from './AdvanceHeading.module.scss';

const AdvanceHeadling = () => {
    return <MainLayout>
        <div className={styles.container}>
            <div className={styles.headline}></div>
            <div className={styles.middleBox}>
                <span className={styles.desc}>don't miss super offers</span>
                <h2 className={styles.title}>Our best products</h2>
            </div>
            <div className={styles.headline}></div>
        </div>
    </MainLayout>
}

export default AdvanceHeadling;