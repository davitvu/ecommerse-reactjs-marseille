import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import styles from "./Home.module.scss";

const HomePage = () => {
    return <div>
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    </div>
}

export default HomePage;