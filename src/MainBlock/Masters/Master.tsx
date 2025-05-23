import React from "react";
import s from "./Masters.module.scss";
import Slider from "./slider/Slider.tsx";
import {RevealOnScroll} from "../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";



const Masters: React.FC = () => {
    return (
        <section className={s.container}>
            <RevealOnScroll animation="fade">
            <h2 className={s.title}>Наши мастера</h2>
            </RevealOnScroll>
            <div className={s.sliderWrapper}>
                <Slider/>
            </div>
        </section>
    );
};

export default Masters;
