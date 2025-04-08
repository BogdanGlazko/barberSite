import { Swiper, SwiperSlide } from 'swiper/react';
import s from "./gallery.module.scss";

// Import Swiper styles
// @ts-ignore
import 'swiper/scss';
// @ts-ignore
import 'swiper/scss/pagination';
import {Mousewheel, Pagination} from "swiper/modules";
import img1 from "../../../assets/barberPhotos/IMG_1057.jpg";
import img2 from "../../../assets/barberPhotos/IMG_1061.jpg";
import img3 from "../../../assets/barberPhotos/IMG_1056.jpg";
import img4 from "../../../assets/barberPhotos/IMG_1058.jpg";

// import required modules
const Gallery = () => {
    return (
        <div className={s.galleryWrapper}>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={{ releaseOnEdges: true }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className={s.mySwiper}
            >
                <SwiperSlide  className={s.slide}>
                    <img
                    src={img1}
                    alt="Наш барбершоп"
                    className={s.shopPhoto}/>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <img
                    src={img2}
                    alt="Наш барбершоп"
                    className={s.shopPhoto}/>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <img
                    src={img3}
                    alt="Наш барбершоп"
                    className={s.shopPhoto}/>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <img
                    src={img4}
                    alt="Наш барбершоп"
                    className={s.shopPhoto}/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;