import styles from './PaymentMethods.module.scss';

const PaymentMethods = () => {
    const srcPayment = [
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg', alt: 'Visa' },
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg', alt: 'Mastercard' },
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg', alt: 'Paypal' },
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg', alt: 'American Express' },
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg', alt: 'Maestro' },
        { src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg', alt: 'Bitcoin' },
    ]

    return (
        <>
            <div className={styles.containerGuarantee}>
                <p className={styles.titleGuarantee}>GUARANTEED <span>SAFE</span> CHECKOUT</p>
                <div className={styles.boxGuarantee}>
                    {srcPayment.map((item, index) => (
                        <img key={index} src={item.src} alt={item.alt} className={styles.imgPayment} />
                    ))}
                </div>
            </div>
            <p className={styles.guaranteeText}>Your payment is 100% Secure</p>
        </>
    )
}

export default PaymentMethods;