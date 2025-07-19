import styles from './ProductItem.module.scss';
import eyeIcon from '@icons/svgs/eye.svg';
import heartIcon from '@icons/svgs/heart.svg';
import bagIcon from '@icons/svgs/bag.svg';
import reloadIcon from '@icons/svgs/reload.svg';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import { LoadingTextCommon } from '@/components/LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCartCommon } from '@/utils/helper';

const ProductItem = ({
    mainSrc,
    subSrc,
    title,
    price,
    details,
    isHomePage = true,
    isSlider = false
}) => {
    const navigate = useNavigate();
    const ourShopStore = useContext(OurShopContext);
    const [selectedSize, setSelectedSize] = useState('');
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart, setProductDetail } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    }

    const handleClearSize = () => {
        setSelectedSize('');
    }

    const handleAddToCard = () => {
        handleAddProductToCartCommon(
            userId, 
            setIsOpen, 
            setType, 
            selectedSize, 
            details._id, 
            1, 
            setIsLoading, 
            handleGetListProductsCart,
            toast
        );
    }

    const handleShowDetailSidebar = () => {
        setIsOpen(true);
        setType('detail');
        setProductDetail(details);
    }

    const handleNavigateToDetail = () => {
        navigate(`/product/${details._id}`);
    }

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true)
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid])

    useEffect(() => {
        if (!isSlider) {
            setIsShowGrid(true);
        }
    }, [isSlider])

    return (
        <div className={classNames(styles.productItem, {
            [styles.oneColumn]: !isShowGrid
        })}>
            <div className={classNames(styles.boxImg, { [styles.largImg]: !isShowGrid })}>
                <img className={styles.mainImg} src={mainSrc} alt={title} onClick={handleNavigateToDetail} />
                <img className={styles.showImgWhenHover} src={subSrc} alt={title} onClick={handleNavigateToDetail} />
                <div className={styles.showFncWhenHover}>
                    <div className={styles.boxIcon}>
                        <img src={bagIcon} alt="bagIcon" />
                    </div>
                    <div className={styles.boxIcon}>
                        <img src={heartIcon} alt="heartIcon" />
                    </div>
                    <div className={styles.boxIcon}>
                        <img src={reloadIcon} alt="reloadIcon" />
                    </div>
                    <div onClick={handleShowDetailSidebar} className={styles.boxIcon}>
                        <img src={eyeIcon} alt="eyeIcon" />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: !isSlider ? "10px" : "0px" }} className={isShowGrid ? "" : styles.content}>
                {!isHomePage && (
                    <div className={styles.boxSize}>
                        {details.size?.map((item, index) => (
                            <button onClick={() => handleSelectSize(item.name)} key={index} className={classNames(styles.size, { [styles.activeSize]: selectedSize === item.name })}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
                {selectedSize && <p onClick={handleClearSize} className={styles.btnClear}>clear</p>}
                <p className={classNames(styles.title, {
                    [styles.textCenter]: !isHomePage
                })} onClick={handleNavigateToDetail}>{title}</p>
                {!isHomePage && (
                    <div className={styles.textCenter} style={{ color: "#c1c1c1", fontSize: "14px", marginTop: "8px" }}>Brand 01</div>
                )}
                <p
                    className={classNames(styles.price, {
                        [styles.textCenter]: !isHomePage
                    })}
                    style={{
                        color: !isHomePage ? '#888' : '',
                    }}
                >${price}</p>
                {!isHomePage && (
                    <div className={classNames(styles.boxBtn, {
                        [styles.boxBtnLeft]: !isShowGrid
                    })}>
                        <Button onClick={handleAddToCard} content={isLoading ? <LoadingTextCommon /> : 'Add to card'} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductItem;