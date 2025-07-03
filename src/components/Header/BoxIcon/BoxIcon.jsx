import styles from '../Header.module.scss';
import fb from '@icons/svgs/fb.svg';
import ins from '@icons/svgs/ins.svg';
import yt from '@icons/svgs/yt.svg';

const BoxIcon = ({ type, href }) => {

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fb
            case 'ins':
                return ins
            case 'yt':
                return yt
        }
    }

    return <div className={styles.boxIcon}>
        <img src={handleRenderIcon(type)} alt={type} />
    </div>
}

export default BoxIcon;