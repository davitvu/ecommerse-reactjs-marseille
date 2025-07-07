import styles from './WishList.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import HeaderSidebar from "@/components/ContentSideBar/components/HeaderSidebar/HeaderSidebar";
import ItemProduct from '@/components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';

const WishList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxContent}>
                <HeaderSidebar icon={heartIcon} title={'WISHLIST'} />
                <ItemProduct />
                <ItemProduct />
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
                <Button content={"VIEW WISHLIST"} />
                <Button content={"ADD ALL TO CART"} isPrimary={false} />
            </div>
        </div>
    )
}

export default WishList;