import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import Button from '@/components/Button/Button';
import styles from '../OurShop.module.scss';

const Banner = () => {

    return (
        <div className={styles.containerBanner}>
            <div className={styles.contentBox}>
                <div className={styles.boxTimer}>
                    <CountdownTimer targetDate={'2025-12-31'} />
                </div>
                <h3 className={styles.title}>The Classics Make A Comeback</h3>
                <div className={styles.boxBtn}>
                    <Button content={'Buy now'} />
                </div>
            </div>
        </div>
    )
}

export default Banner;