import MainLogo from "./MainLogo/MainLogo.tsx";
import InfoBlocks from "./infoBlocks/InfoBlocks.tsx";
import Footer from "./footer/footer.tsx";
import s from "../MainBlock/Main.module.scss"
import Master from "./Masters/Master.tsx";
import BarberGallery from "./BarberGallery/BarberGallery.tsx";
import Map from "./Map/map.tsx";
import FloatingBar from "../AdditionalComponents/rightBarButtons/FloatingBar.tsx";


function Main() {
    return (
        <>
            <div className={s.mainWrapper}>
                <FloatingBar/>
                <MainLogo/>
                <InfoBlocks/>
                {/*<ParallaxEffect childComponent={<InfoBlocks/>}/>*/}
                <Master/>
                <BarberGallery/>
                <Map/>
                <Footer/>

            </div>
        </>

    )
}

export default Main