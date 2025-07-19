import { IoMdStar } from "react-icons/io";
import styles from '../DetailProduct.module.scss';
import { useState } from "react";
import classNames from "classnames";

const FormItem = ({ label, type, isRequired }) => {
    const [rating, setRating] = useState(null);

    const renderStar = (length) => {
        return Array.from({ length }).map((item, index) => {
            return <IoMdStar key={index} size={18} color="currentColor" />
        })
    }

    const renderInput = () => {
        switch (type) {
            case 'rating':
                return <div className={styles.rating}>
                    <div onClick={() => handleRating(1)} className={classNames({
                        [styles.active]: rating === 1
                    })}>{renderStar(1)}</div>
                    <div onClick={() => handleRating(2)} className={classNames({
                        [styles.active]: rating === 2
                    })}>{renderStar(2)}</div>
                    <div onClick={() => handleRating(3)} className={classNames({
                        [styles.active]: rating === 3
                    })}>{renderStar(3)}</div>
                    <div onClick={() => handleRating(4)} className={classNames({
                        [styles.active]: rating === 4
                    })}>{renderStar(4)}</div>
                    <div onClick={() => handleRating(5)} className={classNames({
                        [styles.active]: rating === 5
                    })}>{renderStar(5)}</div>
                </div >
            case 'input':
                return <input type="text" />
            case 'email':
                return <input type="email" />
            case 'textarea':
                return <textarea rows="8" />
            default:
                return null;
        }
    }

    const handleRating = (star) => {
        setRating(star);
    }

    return (
        <div className={styles.formItem}>
            <p className={styles.formItemLabel}>{label} {isRequired && <span>*</span>}</p>
            <div className={styles.formItemContent}>
                {renderInput()}
            </div>
        </div>
    )
}

export default FormItem;