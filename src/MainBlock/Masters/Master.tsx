import React from "react";
import s from "./Masters.module.scss";
import Slider from "./slider/Slider.tsx";



const Masters: React.FC = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>Наши мастера</h2>
            <div className={s.sliderWrapper}>
                <Slider/>
            </div>
            {/*<div className={s.shopPhotoContainer}>*/}
            {/*    <h2 className={s.title}>Наш барбершоп</h2>*/}
            {/*    <GradientSeparatorPage/>*/}
            {/*    <Gallery/>*/}
            {/*</div>*/}
        </section>
    );
};

export default Masters;
