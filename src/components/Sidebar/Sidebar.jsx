import { useContext } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@/components/ContentSideBar/Login/Login';

const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
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
                
                <Login />
            </div>
        </div>
    )
}

export default Sidebar;