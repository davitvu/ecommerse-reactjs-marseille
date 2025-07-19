import { IoCloseOutline } from "react-icons/io5";
import styles from './ItemProduct.module.scss';
import { deleteItem } from "@/apis/cartService";
import { useContext, useState } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { LoadingTextCommon } from "@/components/LoadingTextCommon/LoadingTextCommon";

const ItemProduct = ({ productId, userId, img, name, price, size, sku, quantity }) => {
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SidebarContext)

    const handleDeleteItem = () => {
        setIsDelete(true);
        deleteItem({ productId, userId }).then((res) => {
            handleGetListProductsCart(userId, 'cart');
            setIsDelete(false);
        }).catch((error) => {
            console.log(error);
            setIsDelete(false);
        })
    }

    return (
        <div className={styles.container}>
            <img src={img} alt={name} />
            <div className={styles.boxContent}>
                <p className={styles.title}>{name}</p>
                <p className={styles.size}>Size: {size}</p>
                <p className={styles.price}>{quantity} x ${price}</p>
                <p className={styles.price}>SKU: {sku}</p>

            </div>
            <div onClick={handleDeleteItem} className={styles.boxCloseIcon}>
                <IoCloseOutline style={{
                    fontSize: '25px',
                    color: '#c1c1c1'
                }} />
            </div>
            {isDelete && (
                <div className={styles.overlayLoading}>
                    {<LoadingTextCommon />}
                </div>
            )}
        </div>
    )
}

export default ItemProduct;