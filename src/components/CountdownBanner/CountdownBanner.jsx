import CountdownTimer from "@components/CountdownTimer/CountdownTimer";

import styles from './CountdownBanner.module.scss';
import Button from "@components/Button/Button";

const CountdownBanner = () => {
    return <div className={styles.container}>
        <div className={styles.containerTimer}>
            <CountdownTimer targetDate={'2025-07-12T00:00:00'}/>
        </div>
        <p className={styles.title}>The classics make a comeback</p>
        <div className={styles.btn}>
            <Button content={"Buy now"}/>
        </div>
    </div>
}

export default CountdownBanner;