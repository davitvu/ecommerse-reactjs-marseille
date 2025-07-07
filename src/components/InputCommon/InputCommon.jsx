import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import styles from "./InputCommon.module.scss";
import { useState } from "react";

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { formik, id } = props;

    const isPassword = type === 'password';
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    const isErr = formik.touched[id] && formik.errors[id];
    const msgErr = formik.errors[id]

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.container}>
            <div className={styles.labelInput}>{label} {isRequired && <span>*</span>}</div>
            <div className={styles.boxInput}>
                <input
                    id={id}
                    type={isShowTextPassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    {...props}
                />
                {isPassword && (
                    <div onClick={handleShowPassword} className={styles.boxIcon}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr &&
                    (<div className={styles.errorMsg}>{msgErr}</div>)
                }
            </div>
        </div>
    )
}

export default InputCommon;