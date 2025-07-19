import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from './LoadingTextCommon.module.scss';

export const LoadingTextCommon = () => {
    return (
        <AiOutlineLoading3Quarters className={styles.rotate}/>
    )
}