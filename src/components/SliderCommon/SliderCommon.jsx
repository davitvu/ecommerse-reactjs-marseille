import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import './SliderCommon.css';
import ProductItem from "@/components/ProductItem/ProductItem";

const SliderCommon = ({ data, isProduct = false, slidesToShow = 1, slidesToScroll = 1, variableWidth = false }) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        variableWidth: variableWidth,
        nextArrow: <MdOutlineArrowForwardIos />,
        prevArrow: <MdOutlineArrowBackIos />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={isProduct ? item.id || index : index}>
                    {isProduct ? <ProductItem
                        mainSrc={item.images?.[0] || '/default-image.jpg'}
                        subSrc={item.images?.[1] || '/default-image.jpg'}
                        title={item.name || 'Tên sản phẩm'}
                        price={item.price || 0}
                        details={item}
                        isHomePage={false}
                    /> : <img src={item} alt={item} />}
                </div>
            ))}
        </Slider>

    );
}

export default SliderCommon;