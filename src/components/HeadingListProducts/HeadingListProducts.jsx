import MainLayout from "@components/Layout/MainLayout";
import styles from './HeadingListProducts.module.scss';
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

const HeadingListProducts = ({ data }) => {
    return <MainLayout>
        <div className={styles.container}>
            <div className={styles.containerCount}>
                <CountdownBanner />
            </div>
            {
                data.map((item) => 
                    <ProductItem key={item._id} mainSrc={item.images[0]} subSrc={item.images[1]} title={item.name} price={item.price}/>
                )
            }
        </div>
    </MainLayout>
}

export default HeadingListProducts;