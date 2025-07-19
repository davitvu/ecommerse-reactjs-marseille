import { LoadingTextCommon } from '@/components/LoadingTextCommon/LoadingTextCommon';
import styles from '../CartPage.module.scss';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <LoadingTextCommon />
        </div>
    )
}

export default Loading;