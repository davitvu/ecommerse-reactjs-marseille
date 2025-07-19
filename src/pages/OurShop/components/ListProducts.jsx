import MainLayout from "@/components/Layout/MainLayout";
import ProductItem from "@/components/ProductItem/ProductItem";
import { OurShopContext } from "@/contexts/OurShopProvider";
import { useContext } from "react";
import styles from '../OurShop.module.scss';
import classNames from "classnames";
import Button from "@/components/Button/Button";
import { LoadingTextCommon } from "@/components/LoadingTextCommon/LoadingTextCommon";

const ListProducts = () => {
    const { listProducts, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } = useContext(OurShopContext);

    return (
        <div className={styles.sectionListProduct}>
            <MainLayout>
                {isLoading ? <>Loading...</> : (
                    <>
                        <div className={classNames(styles.containerProduct, {
                            [styles.oneColumn]: !isShowGrid
                        })}>
                            {listProducts.map((item) => {
                                return (
                                    <ProductItem
                                        key={item._id}
                                        mainSrc={item.images[0]}
                                        subSrc={item.images[1]}
                                        title={item.name}
                                        price={item.price}
                                        details={item}
                                        isHomePage={false}
                                    />
                                )
                            })}
                        </div>
                        {listProducts.length < total ? (
                            <div className={styles.LoadMoreBtn}>
                                <Button onClick={handleLoadMore} content={isLoadMore ? <LoadingTextCommon /> : 'LOAD MORE PRODUCTS'} isPrimary={false} />
                            </div>
                        ) : (
                            <div className={styles.LoadMoreBtn}>
                                <Button
                                    style={{ cursor: 'not-allowed' }}
                                    disabled={true}
                                    content={'END'}
                                    isPrimary={false}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    )
}

export default ListProducts;