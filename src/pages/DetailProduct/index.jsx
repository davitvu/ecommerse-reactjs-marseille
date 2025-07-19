import Header from "@/components/Header/Header";
import MainLayout from "@/components/Layout/MainLayout";
import styles from './DetailProduct.module.scss';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button/Button";
import { LuShoppingCart } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import PaymentMethods from "@/components/PaymentMethods/PaymentMothods";
import Accordion from "@/components/Accordion/Accordion";
import Information from "@/pages/DetailProduct/components/Information.jsx";
import Review from "@/pages/DetailProduct/components/Review.jsx";
import Footer from "@/components/Footer/Footer";
import SliderCommon from "@/components/SliderCommon/SliderCommon";
import ReactImageMagnifier from 'simple-image-magnifier/react'
import { getDetailProduct, getRelatedProduct } from "@/apis/productsService";
import { LoadingTextCommon } from "@/components/LoadingTextCommon/LoadingTextCommon";
import { handleAddProductToCartCommon } from "@/utils/helper";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";

const DetailProduct = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [size, setSize] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const [isLoadingBuyNow, setIsLoadingBuyNow] = useState(false);
    const param = useParams();
    const { setIsOpen, setType, handleGetListProductsCart, userId } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);

    const dataAccordionMenu = [
        {
            title: 'ADDITIONAL INFORMATION',
            content: <Information data={data} />
        },
        {
            title: 'REVIEW (0)',
            content: <Review />
        }
    ];

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    const handleSelectSize = (value) => {
        setSize(size === value ? '' : value);
    };

    const handleClearSize = () => {
        setSize('');
    };

    const handleQuantityButtonClick = (action) => {
        if (action === '-') {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else if (action === '+') {
            setQuantity(quantity + 1);
        }
    };

    const handleQuantityInputChange = (e) => {
        if (e.target.value > 0) {
            setQuantity(+e.target.value);
        }
    };

    const handleImageMagnifier = (image) => {
        return (
            <ReactImageMagnifier
                srcPreview={image}
                srcOriginal={image}
                width={295}
                height={350}
                key={image}
            />
        )
    };

    const fetchData = async (id) => {
        setIsLoading(true);
        try {
            const res = await getDetailProduct(id);
            setData(res);
        } catch (error) {
            console.log(error);
            setData();
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataRelated = async (id) => {
        setIsLoading(true);
        try {
            const res = await getRelatedProduct(id);
            setRelatedProduct(res);
        } catch (error) {
            console.log(error);
            setRelatedProduct([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToOurShop = () => {
        navigate('/shop');
    };

    const handleAddToCart = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            size,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductsCart,
            toast
        );
    };

    const handleBuyNow = () => {
        const data = {
            userId,
            productId: param.id,
            quantity,
            size
        }

        setIsLoadingBuyNow(true);
        addProductToCart(data).then((res) => {
            toast.success(`Add "${res.name}" successfully!`);
            navigate('/cart');
            handleGetListProductsCart(userId, 'cart');
            setIsLoadingBuyNow(false);
        }).catch((error) => {
            console.log(error);
            toast.error(`Add "${res.name}" failed!`);
            setIsLoadingBuyNow(false);
        });
    }

    useEffect(() => {
        if (param.id) {
            fetchData(param.id);
            fetchDataRelated(param.id);
        }

    }, [param]);

    return (
        <div>
            <Header />
            <div className={styles.detailProduct}>
                <MainLayout>
                    {isLoading ? <div className={styles.loading}><LoadingTextCommon /></div> : (
                        <>
                            {!data ? <div className={styles.emtyData}>
                                <p>No Result</p>
                                <div className={styles.btnBack} onClick={handleBackToOurShop} >
                                    <Button isPrimary={false} content={"Back to Our shop"} />
                                </div>
                            </div> : (
                                <>
                                    <div className={styles.navBox}>
                                        <div>Home {'>'} <span className={styles.navText}>Men</span></div>
                                        <div onClick={() => handleBackPreviousPage()} className={styles.navBack}>{'<'} Return to
                                            previous page
                                        </div>
                                    </div>
                                    <div className={styles.detailProductContent}>
                                        <div className={styles.detailProductLeft}>
                                            {data?.images.map((item) => (
                                                handleImageMagnifier(item)
                                            ))}
                                        </div>
                                        <div className={styles.detailProductRight}>
                                            <h2 className={styles.title}>{data?.name}</h2>
                                            <p className={styles.price}>${data?.price}</p>
                                            <p className={styles.description}>{data?.description}</p>
                                            <div className={styles.sizeBox}>
                                                <p>Size {size ? `(${size})` : ''}</p>
                                                <div className={styles.sizeList}>
                                                    {data?.size.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className={classNames(styles.sizeItem, {
                                                                [styles.sizeItemActive]: size === item.name
                                                            })}
                                                            onClick={() => handleSelectSize(item.name)}
                                                        >
                                                            {item.name}
                                                        </div>
                                                    ))}
                                                    {size && (
                                                        <p className={styles.clearSize} onClick={() => handleClearSize()}>
                                                            Clear
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={styles.quantityBox}>
                                                <div className={styles.quantity}>
                                                    <div className={styles.quantityItem} onClick={() => handleQuantityButtonClick('-')}>-
                                                    </div>
                                                    <input
                                                        type="number"
                                                        value={quantity}
                                                        onChange={handleQuantityInputChange}
                                                        min={1}
                                                        className={styles.quantityInput} />
                                                    <div className={styles.quantityItem} onClick={() => handleQuantityButtonClick('+')}>+
                                                    </div>
                                                </div>
                                                <Button
                                                    onClick={() => handleAddToCart()}
                                                    customClass={!size && styles.activeDisabledBtn}
                                                    disabled={!size}
                                                    content={<div className={styles.btnAddToCart}>
                                                        {isLoadingBtn ? <LoadingTextCommon /> : (
                                                            <>
                                                                <LuShoppingCart />
                                                                ADD TO CART
                                                            </>
                                                        )}
                                                    </div>}
                                                />
                                            </div>
                                            <div className={styles.orBox}>
                                                <div className={styles.orLine}></div>
                                                <div className={styles.orText}>OR</div>
                                                <div className={styles.orLine}></div>
                                            </div>
                                            <div onClick={handleBuyNow} className={styles.btnBuyNow}>
                                                <Button
                                                    customClass={!size && styles.activeDisabledBtn}
                                                    disabled={!size}
                                                    content={<div className={styles.btnBuyNowContent}
                                                    >
                                                        {isLoadingBuyNow ? <LoadingTextCommon /> : (
                                                            <>
                                                                <LuShoppingCart />
                                                                BUY NOW
                                                            </>
                                                        )}
                                                    </div>}
                                                />
                                            </div>
                                            <div onClick={() => alert('Coming soon')} className={styles.btnAction}>
                                                <div className={styles.btnActionItem}>
                                                    <TfiReload size={18} />
                                                    <span>Add to compare</span>
                                                </div>
                                                <div className={styles.btnActionItem}>
                                                    <IoMdHeartEmpty size={21} />
                                                    <span>Add to wishlist</span>
                                                </div>
                                            </div>
                                            <PaymentMethods />
                                            <div className={styles.textInfoBox}>
                                                <p className={styles.textInfo}>Brand: <span>Brand Name</span></p>
                                                <p className={styles.textInfo}>SKU: <span>SKU123</span></p>
                                                <p className={styles.textInfo}>Category: <span>Category Name</span></p>
                                            </div>
                                            <Accordion dataAccordionMenu={dataAccordionMenu} />
                                        </div>
                                    </div>

                                </>
                            )}
                            <div className={styles.relatedProduct}>
                                <h2 className={styles.relatedProductTitle}>Related products</h2>
                                {relatedProduct && relatedProduct.length > 0 ? (
                                    <SliderCommon data={relatedProduct} isProduct={true} slidesToShow={4} isSlider={true} />
                                ) : (
                                    <p>Không có sản phẩm liên quan</p>
                                )}
                            </div>
                        </>
                    )}
                </MainLayout>
            </div >
            <Footer />
        </div >
    )
}

export default DetailProduct;