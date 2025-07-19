import HeaderSidebar from "@/components/ContentSideBar/components/HeaderSidebar/HeaderSidebar";
import styles from './Cart.module.scss';
import cartIcon from '@icons/svgs/cart.svg';
import ItemProduct from "@/components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@/components/Button/Button";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { LoadingTextCommon } from "@/components/LoadingTextCommon/LoadingTextCommon";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const { listProductsCart, isLoading, setIsOpen } = useContext(SidebarContext);

    const total = listProductsCart.reduce((sum, item) => {
        return sum + item.total;
    }, 0)

    const handleNavigateToShop = () => {
        setIsOpen(false);
        navigate('/shop');
    }

    const handleNavigateToCart = () => {
        setIsOpen(false);
        navigate('/cart');
    }

    return (
        <div className={classNames(styles.container, {[styles.isEmpty]: !listProductsCart.length})}>
            <HeaderSidebar icon={cartIcon} title={"CART"} />
            {listProductsCart.length ? (
                <div className={styles.containerListItem}>
                    <div className={styles.boxContent}>
                        <div className={styles.containerListProductCart}>
                            {listProductsCart.map((item, index) => (
                                <ItemProduct key={index} productId={item.productId} userId={item.userId} img={item.images[0]} name={item.name} price={item.price} size={item.size} sku={item.sku} quantity={item.quantity} />
                            ))}
                            {isLoading && (
                                <div className={styles.overlayLoading}>
                                    {<LoadingTextCommon />}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className={styles.boxTotal}>
                            <p className={styles.title}>Subtotal:</p>
                            <p className={styles.desc}>${total.toFixed(2)}</p>
                        </div>
                        <div className={styles.boxBtn}>
                            <Button onClick={handleNavigateToCart} style={{ height: "43px" }} content={"VIEW CART"} />
                            <Button style={{ height: "43px" }} content={"CHECKOUT"} isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.boxEmpty}>
                    <p>No products in the cart.</p>
                    <Button onClick={handleNavigateToShop} style={{ width: "163px", height: "35px" }} content={"RETURN TO SHOP"} isPrimary={false} />
                </div>
            )}

        </div>
    )
}

export default Cart;