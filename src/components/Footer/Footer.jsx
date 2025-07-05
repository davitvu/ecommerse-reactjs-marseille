import { dataMenu } from '@components/Footer/constants';
import styles from './Footer.module.scss';

const Footer = () => {
    return <div className={styles.container}>
        <div>
            <img width={160} height={55} src={"https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"} alt="Logo" />
        </div>
        <div className={styles.boxNav}>
            {dataMenu.map((item) => (
                <p>{item.content}</p>
            ))}
        </div>
        <div>
            <p style={{ textAlign: "center" }}>Guaranteed safe ckeckout</p>
            <img style={{ margin: "20px 0 20px" }} src={"https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"} alt="" />
        </div>
        <div style={{ marginBottom: "20px" }} >
            <p>Copyright © 2025 <strong>Davitvu</strong>. Created by 8theme – WordPress WooCommerce themes.</p>
        </div>
    </div>
}

export default Footer;