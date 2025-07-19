import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainLayout from "@/components/Layout/MainLayout";
import styles from './About.module.scss';
import Logos from "@/pages/About/components/Logos";

const About = () => {

    const dataContent = [
        { id: 1, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg', desc: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.' },
        { id: 2, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg', desc: 'Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.' },
        { id: 3, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg', desc: 'Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.' },
    ]

    const dataLogos = [
        { id: 1, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png' },
        { id: 2, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png' },
        { id: 3, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png' },
        { id: 4, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png' },
        { id: 5, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-01-min.png' },
        { id: 6, url: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png' },
    ]

    return (
        <div>
            <Header />
            <MainLayout>
                <div className={styles.container}>
                    <div className={styles.container}>
                        <div className={styles.functionBox}>
                            <div>Home {'>'} <span className={styles.specialText}>Shop</span></div>
                            <div onClick={() => handleBackPreviousPage()} className={styles.btnBack}>{'<'} Return to previous page</div>
                        </div>
                    </div>
                    <div className={styles.containerAboutTitle}>
                        <div className={styles.line}>
                            <div className={styles.containerText}>
                                <p className={styles.desc}>we try our best for you</p>
                                <p className={styles.title}>Welcome to the Marseille04 Shop</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerAboutContent}>
                        {dataContent.map((item) => (
                            <div key={item.id}>
                                <img src={item.url} alt="" />
                                <p className={styles.desc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.containerLogos}>
                        <Logos dataLogos={dataLogos} />
                    </div>
                </div>
            </MainLayout>
            <Footer />
        </div>
    )
}

export default About;