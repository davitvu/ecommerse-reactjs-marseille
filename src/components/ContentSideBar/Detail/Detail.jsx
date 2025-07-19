import { useContext, useState } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import styles from './Detail.module.scss';
import SliderCommon from "@/components/SliderCommon/SliderCommon";
import SelectBox from "@/pages/OurShop/components/SelectBox";
import Button from "@/components/Button/Button";
import { LuShoppingCart } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import classNames from "classnames";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";

const Detail = () => {
    const { productDetail, userId, setIsOpen, setIsLoading, setType, handleGetListProductsCart } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const quantityOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
    ]

    const handleSelectSize = (size) => {
        setSize(size);
    }

    const handleSelectQuantity = (quantity) => {
        setQuantity(quantity);
    }
    
    const handleAddToCart = () => {
        if (!size) {
            toast.error('Please select size');
            return;
        }

        const data = {
            userId,
            productId: productDetail._id,
            quantity,
            size,
            isMultiple: true,
        }

        setIsLoading(true);
        setIsOpen(false);
        addProductToCart(data).then((res) => {
            setType('cart');
            setIsOpen(true);
            handleGetListProductsCart(userId, 'cart');
            toast.success('Add to cart successfully');
            setIsLoading(false);
        }).catch((err) => {
            toast.error(err);
            setIsLoading(false);
        });
    }

    return (
        <div className={styles.container}>
            <SliderCommon data={productDetail.images} />
            <div>
                <p className={styles.name}>{productDetail.name}</p>
                <p className={styles.price}>${productDetail.price}</p>
                <p className={styles.description}>{productDetail.description}</p>
                <p className={styles.size}>Size {size ? `(${size})` : ''}</p>
                <div className={styles.sizeBox}>
                    {productDetail.size.map((item, index) => (
                        <div key={index} className={classNames(styles.sizeItem, {[styles.sizeItemActive]: size === item.name})} onClick={() => handleSelectSize(item.name)}>
                            {item.name}
                        </div>
                    ))}
                </div>
                {size && <p className={styles.clearSize} onClick={() => setSize('')}>Clear</p>}
                <div className={styles.btnOption}>
                    <SelectBox options={quantityOption} id={"quantity"} className={styles.selectBox} value={quantity} getValue={handleSelectQuantity} />
                    <div className={styles.btnAddToCart} onClick={handleAddToCart}>
                        <Button content={<div className={styles.btnAddToCartContent}>
                            <LuShoppingCart />
                            ADD TO CART
                        </div>} />
                    </div>
                </div>
                <div className={styles.orBox}>
                    <div className={styles.orLine}></div>
                    <div className={styles.orText}>OR</div>
                    <div className={styles.orLine}></div>
                </div>
                <div className={styles.btnBuyNow}>
                    <Button content={<div className={styles.btnAddToCartContent}>
                        <LuShoppingCart />
                        BUY NOW
                    </div>} />
                </div>
                <div className={styles.btnAction}>
                    <div className={styles.btnActionItem}>
                        <TfiReload />
                        <span>Add to compare</span>
                    </div>
                    <div className={styles.btnActionItem}>
                        <IoMdHeartEmpty size={18} />
                        <span>Add to wishlist</span>
                    </div>
                </div>
                <p className={styles.textInfo}>SKU: <span>12833</span></p>
                <p className={styles.textInfo}>Category: <span>Pullovers</span></p>
                <p className={styles.textInfo}>Estimated delivery: <span>3 - 7 days</span></p>
                <div className={styles.shareBox}>
                    <p className={styles.textInfo}>Share:</p>
                    <div className={styles.shareItem}>
                        <BsTwitterX />
                        <FaFacebookF />
                        <FaPinterestP />
                        <FaInstagram />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detail;