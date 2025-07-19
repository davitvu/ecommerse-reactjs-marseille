import styles from './Accordion.module.scss';
import { useState } from "react";
import classNames from "classnames";
import { RiArrowDownWideFill } from "react-icons/ri";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Accordion = ({ dataAccordionMenu }) => {

    const [isSelected, setIsSelected] = useState(0);

    const handleToggle = (index) => {
        setIsSelected(isSelected === index ? null : index);
    }

    return (
        <div>
            {dataAccordionMenu.map((item, index) => {
                return (<div className={styles.container} key={index}>
                    <div onClick={() => handleToggle(index)} className={classNames(styles.title, {
                        [styles.activeTitle]: isSelected === index
                    })}>{isSelected === index ? <TfiLayoutLineSolid size={20} /> : <RiArrowDownWideFill size={20} />} {item.title}
                    </div>
                    <div className={classNames(styles.content, styles.borderBottom, {
                        [styles.isVisibility]: isSelected === index
                    })}>
                        {item.content}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Accordion;