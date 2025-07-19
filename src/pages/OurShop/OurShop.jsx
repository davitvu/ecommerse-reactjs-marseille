import Header from "@/components/Header/Header";
import MainLayout from "@/components/Layout/MainLayout";
import styles from './OurShop.module.scss';
import { useNavigate } from "react-router-dom";
import Banner from "@/pages/OurShop/components/Banner";
import { OurShopProvider } from "@/contexts/OurShopProvider";
import Filter from "@/pages/OurShop/components/Filter";
import ListProducts from "@/pages/OurShop/components/ListProducts";
import Footer from "@/components/Footer/Footer";

const OurShop = () => {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    }

    return (
        <>
            <OurShopProvider>
                <Header />
                <MainLayout>
                    <div className={styles.container}>
                        <div className={styles.functionBox}>
                            <div>Home {'>'} <span className={styles.specialText}>Shop</span></div>
                            <div onClick={() => handleBackPreviousPage()} className={styles.btnBack}>{'<'} Return to previous page</div>
                        </div>
                    </div>
                    <Banner />
                    <div>
                        <Filter />
                        <ListProducts />
                    </div>
                </MainLayout>
                <Footer />
            </OurShopProvider>
        </>
    )
}

export default OurShop;