import s from '../MainLogo/MainLogo.module.scss';
import logo from "../../assets/mainLogoImages/noBackgr.png"
import lamp from "../../assets/mainLogoImages/barberLamp.jpg";
import BookAndImage from "../bookingAndImage/BookAndImage.tsx";
import StarBackground from "../../AdditionalComponents/StarEffect/StarBackground.tsx";
const MainLogo = () => {
    return (
        <div className={s.logoWrapper}>
            <StarBackground/>
            <img src={logo} className={s.logo}/>

            <div className={s.linesWrapper}>

                <div className={s.headerLineWrap1}>
                    <div className={s.coursiveStyle}>the</div>
                    <div className={s.bigBoldStyle}>BARBERSHOP</div>
                </div>
                <div className={s.headerLineWrap2}>
                    <div className={s.coursiveStyle}>with</div>
                    <div className={s.bigBoldStyle}>modern</div>
                    <div className={s.coursiveStyle}>style</div>
                </div>
                <div className={s.logoImage}>
                    <img src={lamp} alt="hairstyle"/>
                    <BookAndImage/>
                </div>
            </div>
        </div>
    );
};

export default MainLogo;