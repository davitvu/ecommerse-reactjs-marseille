import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import styles from './Logos.module.scss';

const Logos = ({ dataLogos }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
            >
                {dataLogos.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={item.url}
                            alt=""
                            style={{
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }}
                            className={styles.img}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div ref={prevRef} className={styles.customPrev}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>
            <div ref={nextRef} className={styles.customNext}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>
        </div >
    )
}

export default Logos;