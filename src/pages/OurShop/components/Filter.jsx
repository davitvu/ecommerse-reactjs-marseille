import { OurShopContext } from "@/contexts/OurShopProvider";
import { useContext } from "react";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiBoxList } from "react-icons/ci";
import styles from '../OurShop.module.scss';
import classNames from "classnames";
import SelectBox from "@/pages/OurShop/components/SelectBox";

const Filter = () => {
    const { sortOptions, showOption, setSortId, setShowId, setIsShowGrid } = useContext(OurShopContext);

    const getValueSelect = (value, id) => {
        if (id === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    }

    const handleGetShowGrid = (id) => {
        setIsShowGrid(id === 'grid');
    }

    return (
        <div className={styles.containerFilter}>
            <div className={styles.boxLeft}>
                    <SelectBox id={'sort'} options={sortOptions} getValue={getValueSelect} />
                <div className={styles.boxIcon}>
                    <TfiLayoutGrid4 
                        style={{ fontSize: "22px", cursor: "pointer" }} 
                        onClick={() => handleGetShowGrid('grid')}
                    />
                    <div style={{ width: "1px", height: "26px", backgroundColor: "#e1e1e1" }} />
                    <CiBoxList 
                        style={{ fontSize: "24px", color: "#222", cursor: "pointer" }} 
                        onClick={() => handleGetShowGrid('list')}
                    />
                </div>
            </div>
            <div className={styles.boxRight}>
                <span>show</span>
                <SelectBox id={'show'} options={showOption} getValue={getValueSelect} />
            </div>
        </div>
    )
}

export default Filter;