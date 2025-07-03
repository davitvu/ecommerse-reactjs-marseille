import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './Header.module.scss'
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png'
import reloadIcon from '@icons/svgs/reload.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.containerBox}>
                    <div className={styles.containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon type={item.type} href={item.href} />
                            })
                        }
                    </div>
                    <div className={styles.containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => (
                                <Menu content={item.content} href={item.href} />
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
                            <Menu content={item.content} href={item.href} />
                        ))
                    }
                    <div className={styles.containerBoxButtonRight}>
                        <img width={22} height={22} src={reloadIcon} alt="reloadIcon" />
                        <img width={23} height={23} src={heartIcon} alt="heartIcon" />
                        <img width={23} height={23} src={cartIcon} alt="cartIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;