import classNames from 'classnames';
import styles from '../../CartPage.module.scss';
import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';

const Stepper = ({ number, content, isDisabled = false }) => {
    const { setCurrentStep } = useContext(StepperContext);
    
    return (
        <div className={classNames(styles.stepper, {[styles.isDisabled]: isDisabled})} onClick={() => (number === 3 ? setCurrentStep(number) : {})}
            style={{
                cursor: number === 3 ? 'not-allowed' : 'pointer'
            }}
        >
            <div className={classNames(styles.numberStep, {[styles.numberDisable]: isDisabled})}>{number}</div>
            <div className={classNames(styles.textStep, {[styles.textDisable]: isDisabled})}>{content}</div>
        </div>
    )
}

export default Stepper;