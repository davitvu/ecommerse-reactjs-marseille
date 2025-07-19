import Button from '@/components/Button/Button';
import PaymentMethods from '@/components/PaymentMethods/PaymentMothods';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { handleTotalPrice } from '@/utils/helper';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import styles from './Checkout.module.scss';

const RightBody = ({ handleExternalSubmit }) => {
    const { listProductsCart } = useContext(SidebarContext);
    const [radioSelected, setRadioSelected] = useState("check-payments");

    return (
        <div className={styles.orderSummary}>
            <h3 className={styles.title}>Order summary</h3>
            <div className={styles.boxProducts}>
                {listProductsCart.map((item, index) => (
                    <div className={styles.productItem} key={index}>
                        <img src={item.images[0]} alt="" />
                        <div className={styles.productInfo}>
                            <p>{item.name}</p>
                            <p>{item.quantity} x <span>${item.price}</span></p>
                            <p>Size: <span>{item.size}</span></p>
                            <p>Subtotal: <span>${item.price * item.quantity}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.boxSubTotal}>
                <p className={styles.title}>Subtotal</p>
                <p className={styles.price}>${handleTotalPrice(listProductsCart).toFixed(2)}</p>
            </div>
            <div className={styles.boxTotal}>
                <p className={styles.title}>TOTAL</p>
                <p className={styles.price}>${handleTotalPrice(listProductsCart).toFixed(2)}</p>
            </div>
            <div className={styles.boxPayment}>
                <div className={styles.boxPaymentItem}>
                    <input onChange={() => setRadioSelected("check-payments")} checked={radioSelected === "check-payments"} type="radio" id="check-payments" name="payment-method" />
                    <label htmlFor="check-payments">Check payments</label>
                </div>
                <p 
                    className={classNames(styles.descPayment, {[styles.radioSelected]: radioSelected === "check-payments"})}
                >Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
            </div>
            <div className={styles.boxPayment}>
                <div className={styles.boxPaymentItem} >
                    <input onChange={() => setRadioSelected("cash-on-delivery")} checked={radioSelected === "cash-on-delivery"} type="radio" id="cash-on-delivery" name="payment-method" />
                    <label htmlFor="cash-on-delivery">Cash on delivery</label>
                </div>
                <p 
                    className={classNames(styles.descPayment, {[styles.radioSelected]: radioSelected === "cash-on-delivery"})}
                >Pay with cash upon delivery.</p>
            </div>
            <div className={styles.boxButton}>
                <Button onClick={handleExternalSubmit} content="PLACE ORDER" />
            </div>
            <PaymentMethods />
        </div>
    )
}

export default RightBody;