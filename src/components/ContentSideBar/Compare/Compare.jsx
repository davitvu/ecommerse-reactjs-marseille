
import HeaderSidebar from '@/components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import reloadIcon from '@icons/svgs/reload.svg';
import styles from './Compare.module.scss';
import ItemProduct from '@/components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';

const Compare = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxContent}>
                <HeaderSidebar icon={reloadIcon} title={'COMPARE'} />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <div className={styles.boxBtn}>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    )
}

export default Compare;