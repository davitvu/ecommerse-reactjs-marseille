import Stepper from '@/pages/Cart/components/steps/Stepper';
import styles from '../../CartPage.module.scss';
import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';

const Steps = () => {
    const { currentStep } = useContext(StepperContext);

    const dataSteps = [
        { number: 1, content: "shopping cart" },
        { number: 2, content: "check out" },
        { number: 3, content: "order status" },
    ]

    return (
        <div className={styles.containerSteps}>
            <div className={styles.boxSteps}>
                {dataSteps.map((item, index) => (
                    <div className={styles.boxStep} key={index}>
                        <Stepper 
                            number={item.number} 
                            content={item.content} 
                            isDisabled={index >= currentStep} 
                        />
                        {
                            index !== dataSteps.length - 1 && (
                                <div className={styles.line}></div>
                            )
                        }
                    </div>
                ))}
            </div>
            <div>
                <p className={styles.desc}>You are out of time! Checkout now to avoid losing your order!</p>
            </div>
        </div>
    )
}

export default Steps;