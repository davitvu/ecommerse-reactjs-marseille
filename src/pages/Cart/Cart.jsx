import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainLayout from "@/components/Layout/MainLayout";
import Steps from "@/pages/Cart/components/steps/Steps";
import styles from './CartPage.module.scss';
import ContentStep from "@/pages/Cart/ContentStep";
import { StepperProvider } from "@/contexts/StepperProvider";

const CartPage = () => {

    return (
        <StepperProvider>
            <Header />
            <div className={styles.container}>
                <Steps />
                <MainLayout>
                    <ContentStep />
                </MainLayout>
            </div>
            <Footer />
        </StepperProvider>
    )
}

export default CartPage;