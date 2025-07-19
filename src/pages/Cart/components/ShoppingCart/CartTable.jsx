import React, { useState } from 'react';
import styles from '../../CartPage.module.scss';
import { IoTrashOutline } from "react-icons/io5";
import Button from '@/components/Button/Button';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Loading from '@/pages/Cart/components/Loading';

const CartTable = ({ listProductsCart, handleUpdateQuantity, isLoading, handleDeleteItem, handleDeleteAllItem }) => {

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

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        }
        handleUpdateQuantity(data);
    };

    const handleRemoveItem = (userId, productId) => {
        handleDeleteItem({ userId, productId });
    };

    return (
        <>
            <div className={styles.cartTable}>
                <div className={styles.header}>
                    <span style={{ justifySelf: "start" }}>PRODUCT</span>
                    <span>PRICE</span>
                    <span>SKU</span>
                    <span>QUANTITY</span>
                    <span style={{ justifySelf: "end" }}>SUBTOTAL</span>
                </div>

                {listProductsCart.map((item, index) => (
                    <div className={styles.row} key={index}>
                        <div className={styles.product}>
                            <img src={item.images[0]} alt={item.name} />
                            <div className={styles.nameBox}>
                                <span className={styles.name}>{item.name}</span>
                                {item.size && (
                                    <div className={styles.size}>Size: <span>{item.size}</span></div>
                                )}
                                <button onClick={() => handleRemoveItem(item.userId, item.productId)}>
                                    <IoTrashOutline size={15} />
                                </button>
                            </div>
                        </div>
                        <span className={styles.price}>${item.price}</span>
                        <span className={styles.sku}>{item.sku}</span>
                        <SelectBox
                            id={`quantity-${item.productId}`}
                            options={quantityOption}
                            getValue={(e) => getValueSelect(item.userId, item.productId, e, item.size)}
                            value={item.quantity}
                        />
                        <span className={styles.subTotal}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}

                <div className={styles.footer}>
                    <div className={styles.coupon}>
                        <input type="text" placeholder="Coupon code" />
                        <div className={styles.couponBtn}>
                            <Button content={"OK"} isPrimary={false} />
                        </div>
                    </div>
                    <div onClick={handleDeleteAllItem} className={styles.clearCart}>
                        <Button isPrimary={false} content={<div className={styles.clearCartBtn}>
                            <IoTrashOutline size={15} />
                            CLEAR SHOPPING CART
                        </div>} />

                    </div>
                </div>

                {isLoading && <Loading />}
            </div>
        </>
    );
};

export default CartTable;

