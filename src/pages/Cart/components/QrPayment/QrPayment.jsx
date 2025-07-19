import { getDetailOrder } from "@/apis/oderService";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from './QrPayment.module.scss';
import classNames from "classnames";

const QrPayment = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const totalAmount = params.get('totalAmount');
    const accountBank = {
        accountName: 'Vu Xuan Truong',
        accountNumber: '0867880231',
        bankName: 'MB BANk',
        bankTransfer: 'Bank transfer'
    };
    const [isSuccess, setIsSuccess] = useState(false);

    const qrCodeImg = `https://qr.sepay.vn/img?acc=VQRQADJKG6657&bank=MBBank&amount=${totalAmount}&des=${id}}`

    let interval;

    const handleGetDetailOrder = async () => {
        if (!id) return;

        try {
            const res = await getDetailOrder(id);

            if (res.data.data.status !== 'pending') {
                clearInterval(interval);
            };

            if (res.data.data.status === 'success') {
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
            }

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        interval = setInterval(() => {
            handleGetDetailOrder();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {
                isSuccess ? (
                    <div>
                        <h2>Payment successful</h2>
                    </div>
                ) : (
                    <div className={styles.container}>
                        <div className={styles.qrCode}>
                            <h2>Scan QR Code to pay</h2>
                            <img src={qrCodeImg} alt="qrCode" />
                            <p>Please scan the QR code above to pay for your order. The payment will be processed automatically after 10 minutes.</p>
                            <button>Download QR Code</button>
                        </div>
                        <div className={styles.orderDetails}>
                            <h2>Order Details</h2>
                            <div>
                                <div className={classNames(styles.flex, styles.bankInfo)}>
                                    <img className={styles.bankLogo} src="https://play-lh.googleusercontent.com/6ffpbRPvfX3sIvP9_ZfHxHqSUksandFuKHkxXOQV0H1b2nNseHP2_KJYFjOm9wHqpg" alt="" />
                                    <div className={classNames(styles.flex, styles.title)}>
                                        <p>MB BANk</p>
                                        <p>Bank transfer</p>
                                    </div>
                                </div>
                                <div className={classNames(styles.flex, styles.desc)}>
                                    <p className={styles.title}>Account name</p>
                                    <p className={styles.value}>{accountBank.accountName}</p>
                                </div>
                                <div className={classNames(styles.flex, styles.desc)}>
                                    <p className={styles.title}>Account number</p>
                                    <p className={styles.value}>{accountBank.accountNumber}</p>
                                </div>
                                <div className={classNames(styles.flex, styles.desc)}>
                                    <p className={styles.title}>Amount</p>
                                    <p className={styles.value}>{totalAmount}</p>
                                </div>
                                <div className={classNames(styles.flex, styles.desc)}>
                                    <p className={styles.title}>Payment content</p>
                                    <p className={styles.value}>{id}</p>
                                </div>
                                <div className={classNames(styles.flex, styles.desc, styles.total)}>
                                    <p className={styles.title}>Total</p>
                                    <p className={styles.value}>{totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default QrPayment;