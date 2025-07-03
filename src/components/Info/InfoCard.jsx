import styles from './Info.module.scss'
import TruckFast from '@icons/svgs/truckfast.svg';

const InfoCard = ({ content, desc, src }) => {
    return <div className={styles.containerCard}>
        <img width={45} height={46} src={src} alt="" />
        <div className={styles.boxContent}>
            <div className={styles.title}>{content}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    </div>
}

export default InfoCard;