import { StoreContext } from '@/contexts/storeProvider';
import styles from '../Header.module.scss';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ content, href, handleOpenSideBar }) => {
    const { userInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const handleClick = () => {
        if (content === 'Sign in' && !userInfo) {
            return handleOpenSideBar('login');
        }
        if (content === 'Contacts' || content === 'Search') {
            return handleOpenSideBar('test')
        }
    }

    const handleRenderText = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello ${userInfo.username}`;
        } else {
            return content;
        }
    }

    const handleHover = () => {
        if (content === "Sign in" && userInfo) {
            setIsShowSubMenu(true);
        }
    }

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleHover}
            className={styles.menuItem}
        >
            <Link to={href}>{handleRenderText(content)}</Link>

            {isShowSubMenu && (
                <div
                    className={styles.subMenu}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                >
                    <div
                        className={styles.subMenuItem}
                    >
                        Information
                    </div>
                    <div
                        className={styles.subMenuItem}
                        onClick={() => {
                            handleLogout();
                            // setIsShowSubMenu(false);
                        }}
                    >
                        Log out
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu;