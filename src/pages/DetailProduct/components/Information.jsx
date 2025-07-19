import styles from '../DetailProduct.module.scss';

const Information = ({ data }) => {

    const size = data?.size.map((item) => item.name).join(', ');

    const dataInfo = [
        {id: 1, title: "Size", content: size},
        {id: 2, title: "Material", content: data?.material},
        {id: 3, title: "Color", content: "Black, Blue"},
    ]

    return (
        <div className={styles.infoProduct}>
            {dataInfo.map((item, index) => (
                <div key={index} className={styles.itemInfo}>
                    <div className={styles.titleInfo}>{item.title}</div>
                    <div className={styles.descInfo}>{item.content}</div>
                </div>
            ))}
        </div>
    )
}

export default Information;