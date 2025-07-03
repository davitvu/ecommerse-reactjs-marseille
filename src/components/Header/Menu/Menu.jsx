import styles from '../Header.module.scss';

const Menu = ({ content, href }) => {
    return <div className={styles.menu}>{content}</div>
}

export default Menu;