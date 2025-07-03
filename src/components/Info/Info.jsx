import MainLayout from "../Layout/MainLayout";
import { dataInfo } from "./constants";
import InfoCard from "./InfoCard";
import styles from "./Info.module.scss";

const Info = () => {
    return (
        <MainLayout>
            <div className={styles.container}>
                {dataInfo.map((item) => (
                    <InfoCard content={item.title} desc={item.desc} src={item.src} />
                ))}
            </div>
        </MainLayout>
    )
}

export default Info;
