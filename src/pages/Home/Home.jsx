import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import AdvanceHeadling from "@components/AdvanceHeading/AdvanceHeading";
import Info from "@components/Info/Info";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";

import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";
import Footer from "@components/Footer/Footer";

const HomePage = () => {

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 14
        }

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return <>
        <div className={styles.container}>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)}/>
            <SaleHomePage />
            <Footer />
        </div>
    </>
}

export default HomePage;