import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './Header.module.scss'
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png'
import reloadIcon from '@icons/svgs/reload.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SidebarContext } from '@/contexts/SidebarProvider';

const Header = () => {
    const { setIsOpen, setType } = useContext(SidebarContext);
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);


    const handleOpenSideBar = (type) => {
        setType(type);
        setIsOpen(true);
    };

    useEffect(() => {
        // if (scrollPosition > 83) {
        //     setFixedPosition(true);
        // } else {            
        //     setFixedPosition(false);
        // }

        // setFixedPosition(scrollPosition > 83 ? true : false); // ngan gon
        setFixedPosition(scrollPosition > 83); // ngang gon hon nua
    }, [scrollPosition]);

    return (
        <div className={classNames(styles.container, styles.topHeader, {
            [styles.fixedHeader]: fixedPosition
        })}>
            <div className={styles.containerHeader}>
                <div className={styles.containerBox}>
                    <div className={styles.containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon key={item.type} type={item.type} href={item.href} />
                            })
                        }
                    </div>
                    <div className={styles.containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => (
                                <Menu key={item.content} content={item.content} href={item.href} handleOpenSideBar={handleOpenSideBar} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.containerLogo}>
                    <img src={Logo} alt="Marseille" style={{ width: "153px", height: "53px" }} />
                </div>
                <div className={styles.containerBoxMenuRight}>
                    {
                        dataMenu.slice(3, dataMenu.length).map((item) => (
                            <Menu key={item.content} content={item.content} href={item.href} handleOpenSideBar={handleOpenSideBar} />
                        ))
                    }
                    <div className={styles.containerBoxButtonRight}>
                        <img onClick={() => handleOpenSideBar('compare')} width={22} height={22} src={reloadIcon} alt="reloadIcon" />
                        <img onClick={() => handleOpenSideBar('wishlist')} width={23} height={23} src={heartIcon} alt="heartIcon" />
                        <img onClick={() => handleOpenSideBar('cart')} width={23} height={23} src={cartIcon} alt="cartIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;