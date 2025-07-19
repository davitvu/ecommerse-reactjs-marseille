import Button from "@/components/Button/Button";
import styles from '../../CartPage.module.scss';
import classNames from "classnames";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import PaymentMethods from "@/components/PaymentMethods/PaymentMothods";
import { StepperContext } from "@/contexts/StepperProvider";
import { handleTotalPrice } from "@/utils/helper";

const CartSummary = () => {
    const { listProductsCart } = useContext(SidebarContext);
    const { setCurrentStep } = useContext(StepperContext);

    const handleProcessToCheckout = () => {
        setCurrentStep(2);
    }

    return (
        <div className={styles.containerRight}>
            <div className={styles.containerSummary}>
                <p className={styles.title}>CART TOTALS</p>
                <div>
                    <div className={classNames(styles.boxTotal, styles.subTotal)}>
                        <p>Subtotal</p>
                        <p className={styles.price}>${handleTotalPrice(listProductsCart).toFixed(2)}</p>
                    </div>
                    <div className={styles.boxTotal}>
                        <p>TOTAL</p>
                        <p>${handleTotalPrice(listProductsCart).toFixed(2)}</p>
                    </div>
                </div>
                <div className={styles.boxButton}>
                    <Button content="PROCESS TO CHECKOUT" onClick={handleProcessToCheckout} />
                    <Button content="CONTINUE SHOPPING" isPrimary={false} />
                </div>
            </div>

            <PaymentMethods />
        </div>
    )
}

export default CartSummary;