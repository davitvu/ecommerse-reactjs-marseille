import classNames from 'classnames';
import styles from './Button.module.scss'

const Button = ({ content, isPrimary = true, customClass = false, ...props }) => {
    return (
        <button
            className={classNames(styles.btn, {
                [styles.primaryBtn]: isPrimary,
                [styles.seconddaryBtn]: !isPrimary,
                [customClass]: customClass
            })}
            {...props}
        >{content}</button>
    )
}

export default Button;