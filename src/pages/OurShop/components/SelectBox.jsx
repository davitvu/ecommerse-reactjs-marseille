import classNames from 'classnames';
import styles from '../OurShop.module.scss';

const SelectBox = ({ options, getValue, id, ...props }) => {
    return (
        <select
            id={id}
            className={classNames(styles.selectBox, styles[id])}
            onChange={(e) => getValue(e.target.value, id)}
            {...props}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
};

export default SelectBox;