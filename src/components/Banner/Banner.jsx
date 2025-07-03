import Button from '../Button/Button';
import styles from './Banner.module.scss';

const Banner = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>XStore Marseille04 Demo</h1>
            <p className={styles.desc}>Make yours celebrations even more special this years with beautiful.</p>
            <Button content={"Go to shop"} />
        </div>
    </div>
}

export default Banner;