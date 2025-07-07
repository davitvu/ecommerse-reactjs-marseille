import { IoCloseOutline } from "react-icons/io5";
import styles from './ItemProduct.module.scss';

const ItemProduct = () => {
    return (
        <div className={styles.container}>
            <img src={'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg'} alt="" />
            <div className={styles.boxContent}>
                <p className={styles.title}>title of product</p>
                <p className={styles.size}>Size:M</p>
                <p className={styles.price}>$199.99</p>
                <p className={styles.price}>SKU: 12348</p>
                
            </div>
            <div className={styles.boxCloseIcon}>
                <IoCloseOutline style={{
                    fontSize: '25px',
                    color: '#c1c1c1'
                }}/>
            </div>
        </div>
    )
}

export default ItemProduct;