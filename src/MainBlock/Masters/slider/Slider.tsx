import styles from "./Slider.module.scss";
import artemPhoto from "../../../assets/barberPhotos/artem.jpg";
import dimaPhoto from "../../../assets/barberPhotos/dima.jpg";
import valeraPhoto from "../../../assets/barberPhotos/poc.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {RevealOnScroll} from "../../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";

const masters = [
    { name: "Артём", photo: artemPhoto },
    { name: "Дима", photo: dimaPhoto },
    { name: "Денис", photo: valeraPhoto }
];

export default function App() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className={styles.mySwiper}
            slidesPerView={1}

            breakpoints={{
                380: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1028: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}

        >
                {masters.map((master, index) => (
                        <SwiperSlide key={index} className={styles.masterCard}>
                            <RevealOnScroll animation="zoom">
                                <div className={styles.masterPhoto}>
                            <img src={master.photo} alt={master.name} className={styles.masterImage} />
                            <div className={styles.masterName}>{master.name}</div>
                        </div>
                            </RevealOnScroll>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
