import styles from '../Header.module.scss';

const Menu = ({ content, href, handleOpenSideBar }) => {

    const handleClick = () => {
        switch (content) {
            case 'Sign in':
                return handleOpenSideBar('login');
            default:
                return handleOpenSideBar('test')
        }
    }

    return (
        <div
            onClick={handleClick}
            className={styles.menuItem}
        >{content}</div>
    )
}

export default Menu;