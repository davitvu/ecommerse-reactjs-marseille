import styles from './MainLayout.module.scss'

const MainLayout = ({ children }) => {
    const { wrapLayout, container } = styles;

    return (
        <div className={wrapLayout}>
            <div className={container}>{children}</div>
        </div>
    );
}

export default MainLayout;