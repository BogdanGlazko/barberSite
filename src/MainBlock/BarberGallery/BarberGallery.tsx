import s from "./BarberGallery.module.scss"
import img1 from "../../../src/assets/barberPhotos/g1.jpg";
import img2 from "../../../src/assets/barberPhotos/IMG_1060.jpg";
import img3 from "../../../src/assets/barberPhotos/g3.jpg";
import img4 from "../../../src/assets/barberPhotos/IMG_1058.jpg";
import img5 from "../../../src/assets/barberPhotos/g4.jpg";
import img6 from "../../../src/assets/barberPhotos/crop3.jpg";
import GradientSeparatorPage from "../../AdditionalComponents/GradientEffect/GradientSeparator.tsx";
import GradientSeparatorBottomPage from "../../AdditionalComponents/GradientEffect/GradientSeparatorBottom.tsx";
import {RevealOnScroll} from "../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";



const imagesGallery:string[] = [img1, img2, img3, img4, img5, img6];

const BarberGallery = () => {
    // @ts-ignore
    return (
        <div className={s.galleryWrapper}>
            <RevealOnScroll animation="zoom">
                <div className={s.title}>Наш стиль</div>
            </RevealOnScroll>
            <GradientSeparatorPage/>

            <div className={s.wrapper}>
                {imagesGallery.map((image, key) => (
                    <div className={`${s.image} ${s["img" + (key + 1)]}`}>
                        <RevealOnScroll animation="fade" delay={0.1 + key / 10} key={key}>
                            <img src={image} alt={`barber-photo-${key}`} />
                        </RevealOnScroll>
                    </div>

                ))}
            </div>

            <GradientSeparatorBottomPage/>
        </div>
    );
};


export default BarberGallery;

