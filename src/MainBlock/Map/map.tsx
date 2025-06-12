import React from "react";
import s from "./map.module.scss"
import {RevealOnScroll} from "../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";

const Map: React.FC = () => {

    return (
        <>
            <RevealOnScroll animation="fade">
            <header>Наши контакты</header>
            </RevealOnScroll>
            <div className={s.mapWrapper}>
                <div className={` ${s.headerAdress} ${s.unboundFont}`}>АДРЕС</div>

                <div className={s.container}>

                    <div className={s.contact}>
                        <RevealOnScroll animation="slide-right">
                        <div className={` ${s.headerContacts} ${s.unboundFont}`}>Г.Гродно Ул Янки Купалы, 67</div>
                        <p><strong>Телефон:</strong> <a href="tel:18446367288">+375297415273</a></p> <br/>
                        {/*<p><strong>Email:</strong> <a href="mailto:support@capellis.com">support@capellis.com</a></p>*/}
                        <p className={s.italic}>На связи — по стилю и по делу. <br/>
                            Запишись — и получи образ, который говорит за тебя.</p>
                    </RevealOnScroll>
                    </div>


                    <div className={s.hours}>
                        <RevealOnScroll animation="slide-left">
                        <div className={`${s.headerContacts} ${s.unboundFont}`}>Часы работы</div>
                        <ul>
                            <li><span>Понедельник</span> <span>10 – 21</span></li>
                            <li><span>Вторник</span> <span>10 – 21</span></li>
                            <li><span>Среда</span> <span>10 – 21</span></li>
                            <li><span>Четверг</span> <span>10 – 21</span></li>
                            <li><span>Пятница</span> <span>10 – 21</span></li>
                            <li><span>Суббота</span> <span>10 – 21</span></li>
                            <li><span>Воскресенье</span> <span>10 – 21</span></li>
                        </ul>
                        </RevealOnScroll>
                    </div>

                </div>
                <div className={` ${s.unboundFont} ${s.gMapWrapper} `}>КАРТА</div>
            </div>


            <div className={s.mapWidthWrapper}>
                <div className={s.map}>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad704259676c4e15a6084073ea0567a7ec047e1b8478fd8c1a1967f52144a31fd&amp;source=constructor"
                            width="100%"
                            frameBorder="0">
                    </iframe>
                </div>
            </div>
        </>


    )
        ;
};

export default Map;
