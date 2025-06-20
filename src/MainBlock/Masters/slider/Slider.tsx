import styles from "./Slider.module.scss";
import artemPhoto from "@/assets/barberPhotos/artem.jpg";
import dimaPhoto from "@/assets/barberPhotos/dima.jpg";
import valeraPhoto from "@/assets/barberPhotos/poc.jpg";
import matvei from "@/assets/barberPhotos/matvei.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";
import {RevealOnScroll} from "../../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";

const masters = [
    { name: "Артём", photo: artemPhoto, link: "https://n446974.yclients.com/company/423718/personal/select-master?o=m1234300" },
    { name: "Дима", photo: dimaPhoto , link: "https://n446974.yclients.com/company/423718/personal/select-master?o=m1234356"},
    { name: "Денис", photo: valeraPhoto, link: "https://n446974.yclients.com/company/423718/personal/select-master?o=m1519686" },
    { name: "Матвей", photo: matvei, link: "https://n446974.yclients.com/company/423718/personal/select-master?o=m3301456" }
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
                            <div className={styles.hoverEffectBtn}>
                                <img src={master.photo} alt={master.name} className={styles.masterImage} />
                                <h3 className={styles.title}>{master.name}</h3>
                                <div className={styles.overlay}></div>
                                <div className={styles.button}>
                                    <a href={master.link}>Записаться</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </SwiperSlide>

                ))}
        </Swiper>
    );
}
