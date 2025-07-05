import styles from './ProductItem.module.scss';
import eyeIcon from '@icons/svgs/eye.svg';
import heartIcon from '@icons/svgs/heart.svg';
import bagIcon from '@icons/svgs/bag.svg';
import reloadIcon from '@icons/svgs/reload.svg';

const ProductItem = ({
    mainSrc,
    subSrc,
    title,
    price
}) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.boxImg}>
                <img className={styles.mainImg} src={mainSrc} alt={title} />
                <img className={styles.showImgWhenHover} src={subSrc} alt={title} />
                <div className={styles.showFncWhenHover}>
                    <div className={styles.boxIcon}>
                        <img src={bagIcon} alt="bagIcon" />
                    </div>
                    <div className={styles.boxIcon}>
                        <img src={heartIcon} alt="heartIcon" />
                    </div>
                    <div className={styles.boxIcon}>
                        <img src={reloadIcon} alt="reloadIcon" />
                    </div>
                    <div className={styles.boxIcon}>
                        <img src={eyeIcon} alt="eyeIcon" />
                    </div>
                </div>
            </div>
            <div className={styles.boxContent}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
    )
}

export default ProductItem;