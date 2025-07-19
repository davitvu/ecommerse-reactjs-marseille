import CartTable from '@/pages/Cart/components/ShoppingCart/CartTable';
import styles from '../../CartPage.module.scss';
import CartSummary from '@/pages/Cart/components/ShoppingCart/CartSummary';
import { useContext } from 'react';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { addProductToCart, deleteAllItem, deleteItem } from '@/apis/cartService';
import { ToastContext } from '@/contexts/ToastProvider';
import Loading from '@/pages/Cart/components/Loading';
import { IoCartOutline } from "react-icons/io5";
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const { listProductsCart, handleGetListProductsCart, isLoading, setIsLoading, userId } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const navigate = useNavigate();

    const handleUpdateQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data).then((res) => {
            handleGetListProductsCart(data.userId, 'cart');
        }).catch((err) => {
            toast.error('Update quantity failed');
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleDeleteItem = (data) => {
        setIsLoading(true);
        deleteItem(data).then((res) => {
            handleGetListProductsCart(data.userId, 'cart');
        }).catch((err) => {
            toast.error('Delete item failed');
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleDeleteAllItem = () => {
        setIsLoading(true);
        deleteAllItem({ userId }).then((res) => {
            handleGetListProductsCart(userId, 'cart');
        }).catch((err) => {
            toast.error('Delete all item failed');
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleNavigateToShop = () => {
        navigate('/shop');
    }

    return (
        <>
            {listProductsCart.length > 0 && userId ? (
                <div className={styles.containerContent}>
                    <CartTable listProductsCart={listProductsCart} handleUpdateQuantity={handleUpdateQuantity} isLoading={isLoading} handleDeleteItem={handleDeleteItem} handleDeleteAllItem={handleDeleteAllItem} />
                    <CartSummary isLoading={isLoading} />

                    {isLoading && <Loading />}
                </div>
            ) : (
                <div className={styles.emptyCart}>
                    <IoCartOutline size={60} />
                    <p className={styles.title}>YOUR SHOPPING CART IS EMPTY</p>
                    <p className={styles.desc}>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
                    <div onClick={handleNavigateToShop} className={styles.btn}>
                        <Button content={"RETURN TO SHOP"} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ShoppingCart;