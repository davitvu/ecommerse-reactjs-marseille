import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import styles from "./InputCommon.module.scss";
import { useState } from "react";

const InputCommon = ({ label, type, isRequired = false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.container}>
            <div className={styles.labelInput}>{label} {isRequired && <span>*</span>}</div>
            <div className={styles.boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div onClick={handleShowPassword} className={styles.boxIcon}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputCommon;