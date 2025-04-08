import s from "./BarberGallery.module.scss"
import img1 from "../../../src/assets/barberPhotos/g1.jpg";
import img2 from "../../../src/assets/barberPhotos/IMG_1060.jpg";
import img3 from "../../../src/assets/barberPhotos/g3.jpg";
import img4 from "../../../src/assets/barberPhotos/IMG_1058.jpg";
import img5 from "../../../src/assets/barberPhotos/g4.jpg";
import img6 from "../../../src/assets/barberPhotos/crop3.jpg";
import GradientSeparatorPage from "../../AdditionalComponents/GradientEffect/GradientSeparator.tsx";
import GradientSeparatorBottomPage from "../../AdditionalComponents/GradientEffect/GradientSeparatorBottom.tsx";

const BarberGallery = () => {
    return (
        <>
            <div className={s.title}>Наш стиль</div>
            <GradientSeparatorPage/>
            <div className={s.wrapper}>
                <div className={s.image}><img src={img1} alt=""/></div>
                <div className={s.image}><img src={img2} alt=""/></div>
                <div className={s.image}><img src={img3} alt=""/></div>
                <div className={s.image}><img src={img4} alt=""/></div>
                <div className={s.image}><img src={img5} alt=""/></div>
                <div className={s.image}><img src={img6} alt=""/></div>
            </div>
            <GradientSeparatorBottomPage/>
        </>
    );
};


export default BarberGallery;

