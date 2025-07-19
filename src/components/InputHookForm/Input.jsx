import styles from './InputHookForm.module.scss';

const InputHookForm = ({
    label,
    type,
    placeholder,
    isRequired = false,
    dataOptions = [],
    register,
    isShowLabel = true,
    isError = false
}) => {
    const renderInput = () => {
        switch (type) {
            case 'text':
                return <input className={isError ? styles.error : ''} type="text" placeholder={placeholder} {...register} />
            case 'email':
                return <input className={isError ? styles.error : ''} type="email" placeholder={placeholder} {...register} />
            case 'number':
                return <input className={isError ? styles.error : ''} type="number" placeholder={placeholder} {...register} />
            case 'password':
                return <input className={isError ? styles.error : ''} type="password" placeholder={placeholder} {...register} />
            case 'textarea':
                return <textarea placeholder={placeholder} {...register} />
            case 'select':
                return <select className={isError ? styles.error : ''} {...register} defaultValue="" >
                    <option value="" disabled hidden>{label}</option>
                    {dataOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>
            default:
                return <input className={isError ? styles.error : ''} type="text" placeholder={placeholder} {...register} />
        }
    }

    return (
        <div className={styles.container}>
            {isShowLabel && <label className={styles.label}>{label} {isRequired && <span className={styles.required}>*</span>}</label>}
            <div className={styles.inputBox}>
                {renderInput()}
            </div>
        </div>
    );
}

export default InputHookForm;