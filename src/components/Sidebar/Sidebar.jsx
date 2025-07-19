import { useContext } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@/components/ContentSideBar/Login/Login';
import Compare from '@/components/ContentSideBar/Compare/Compare';
import WishList from '@/components/ContentSideBar/WishList/WishList';
import Cart from '@/components/ContentSideBar/Cart/Cart';
import Detail from '@/components/ContentSideBar/Detail/Detail';

const Sidebar = () => {
    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleRenderContent = () => {
        switch (type) {
            case 'test':
                return <div>dang phat trien</div>
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <WishList />;
            case 'cart':
                return <Cart />
            case 'detail':
                return <Detail />
            default:
                return <div>day la default</div>
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleToggle} className={classNames({
                [styles.overlay]: isOpen
            })} />
            <div className={classNames(styles.sidebar, {
                [styles.slideSidebar]: isOpen
            })}>
                {isOpen && <div onClick={handleToggle} className={styles.boxIcon}>
                    <TfiClose />
                </div>}

                {handleRenderContent()}
            </div>
        </div>
    )
}

export default Sidebar;