import MainLayout from "@components/Layout/MainLayout";
import styles from "./PopularProduct.module.scss";
import ProductItem from "@components/ProductItem/ProductItem";

const PopularProduct = ({ data }) => {
    return <>
        <MainLayout>
            <div className={styles.container}>
                {
                    data.map((item) =>
                        <ProductItem
                            key={item._id}
                            mainSrc={item.images[0]}
                            subSrc={item.images[1]}
                            title={item.name}
                            price={item.price}
                            details={item}
                            isHomePage={true}
                        />
                    )
                }
            </div>
        </MainLayout>
    </>
}

export default PopularProduct;