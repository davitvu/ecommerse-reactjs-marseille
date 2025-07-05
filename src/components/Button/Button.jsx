import classNames from 'classnames';
import styles from './Button.module.scss'

const Button = ({ content, isPrimary = true, }) => {
    return <button className={classNames(styles.btn, {
        [styles.primaryBtn]: isPrimary,
        [styles.seconddaryBtn]: !isPrimary
    })}>{content}</button>
}

export default Button;