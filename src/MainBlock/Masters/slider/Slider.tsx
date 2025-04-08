import styles from "./Slider.module.scss";
import artemPhoto from "../../../assets/barberPhotos/artem.jpg";
import dimaPhoto from "../../../assets/barberPhotos/dima.jpg";
import valeraPhoto from "../../../assets/barberPhotos/poc.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const masters = [
    { name: "Артём", photo: artemPhoto },
    { name: "Дима", photo: dimaPhoto },
    { name: "Валера", photo: valeraPhoto },
    { name: "Дима", photo: dimaPhoto },
    { name: "Валера", photo: valeraPhoto }
];

export default function App() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className={styles.mySwiper}
            slidesPerView={2}

            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 7,
                },
                1028: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },

                1440: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}

        >
                {masters.map((master, index) => (
                    <SwiperSlide key={index} className={styles.masterCard}>
                        <div className={styles.masterPhoto}>
                            <img src={master.photo} alt={master.name} className={styles.masterImage} />
                            <div className={styles.masterName}>{master.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
