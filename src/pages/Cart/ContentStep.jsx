import { StepperContext, StepperProvider } from "@/contexts/StepperProvider";
import Checkout from "@/pages/Cart/components/Checkout/Checkout";
import QrPayment from "@/pages/Cart/components/QrPayment/QrPayment";
import ShoppingCart from "@/pages/Cart/components/ShoppingCart/ShoppingCart";
import { useContext } from "react";

const ContentStep = () => {
    const { currentStep } = useContext(StepperContext);
    
    const handleRenderContent = () => {
        switch (currentStep) {
            case 1: 
                return <ShoppingCart />;
            case 2:
                return <Checkout />;
            case 3:
                return <QrPayment />;
            default:
                return <ShoppingCart />;
        }
    }


    return (
        <>
            {handleRenderContent()}
        </>
    )
}

export default ContentStep;