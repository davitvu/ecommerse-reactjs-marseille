
import styles from './HeaderSidebar.module.scss';

const HeaderSidebar = ({ icon, title }) => {
    return (
        <div className={styles.container}>
            <img width={26} height={26} src={icon} alt={icon} />
            <div>{title}</div>
        </div>
    )
}

export default HeaderSidebar;