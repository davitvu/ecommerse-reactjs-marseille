import HeaderSidebar from "@/components/ContentSideBar/components/HeaderSidebar/HeaderSidebar";
import styles from './Cart.module.scss';
import cartIcon from '@icons/svgs/cart.svg';
import ItemProduct from "@/components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@/components/Button/Button";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxContent}>
                <HeaderSidebar icon={cartIcon} title={"CART"} />
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
            <div>
                <div className={styles.boxTotal}>
                    <p className={styles.title}>Subtotal:</p>
                    <p className={styles.desc}>$554.50</p>
                </div>
                <div className={styles.boxBtn}>
                    <Button content={"VIEW CART"} />
                    <Button content={"CHECKOUT"} isPrimary={false} />
                </div>
            </div>
        </div>
    )
}

export default Cart;