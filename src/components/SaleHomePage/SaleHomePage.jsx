import Button from "@components/Button/Button";
import styles from "./SaleHomePage.module.scss";
import useTranslateX from "@components/SaleHomePage/useTranslateX";

const SaleHomePage = () => {
    const { translateXPosition } = useTranslateX()

    return <div className={styles.container}>
        <div
            className={styles.boxImg}
            style={{
                transform: `translateX(${translateXPosition}px)`,
                transition: 'transform 1.7s ease'
            }}
        >
            <img src={"https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"} alt="" />
        </div>
        <div className={styles.content}>
            <h2 className={styles.title}>Sale of the year</h2>
            <p className={styles.desc}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
            <Button content={"Read more"} isPrimary={false} />
        </div>
        <div
            className={styles.boxImg}
            style={{
                transform: `translateX(-${translateXPosition}px)`,
                transition: 'transform 1.7s ease'
            }}
        >
            <img src={"https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"} alt="" />
        </div>
    </div>
}

export default SaleHomePage;