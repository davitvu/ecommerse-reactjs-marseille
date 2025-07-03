import styles from './Button.module.scss'

const Button = () => {
    return <div>
        <button
            className={styles.btn}
        >M</button>
        <button
            className={styles.btn2}
        >X</button>
    </div>
}

export default Button;