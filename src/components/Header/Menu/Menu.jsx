import styles from '../Header.module.scss';

const Menu = ({ content, href, setIsOpen }) => {
    return (
        <div
            className={styles.menu}
            onClick={() => setIsOpen(true)}
        >{content}</div>
    )
}

export default Menu;