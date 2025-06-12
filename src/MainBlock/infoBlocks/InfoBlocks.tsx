import s from '../infoBlocks/InfoBlocks.module.scss'
import InfoBlock from "./Infoblock.tsx";
import {RevealOnScroll} from "../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";
import backImg from '@/assets/barberPhotos/IMG_1056.jpg';


const InfoBlocks = () => {
    const services = [
        {
            blockName: "Стрижка и бритье",
            items: [
                {name: "Стрижка Классическая", price: 40},
                {name: "Под Машинку", price: 35},
                {name: "Стрижка бороды", price: 35},
                {name: "Детская стрижка", price: 35},]
        }
    ];
    const additionalServices = [
        {
            blockName: "Комплексы",
            items: [
                {name: "Борода и Стрижка", price: 60},
                {name: "Стрижка бороды и Тонировка", price: 55},
                {name: "Полный образ (Борода, Стрижка и Тонировка)", price: 75}
            ]
        }
    ];
    const cosmetics = [
        {
            blockName: "Уход",
            items: [
                {name: "Паста Matt Gloss", price: 25},
                {name: "Пудра Alpha Homme", price: 15},
                {name: "Одеколон Nish Man", price: 20},
                {name: "Шампунь Alpha/Marine", price: 40}]
        }
    ];


    return (
        <>
            <div className={s.container}
                 style={{ '--bg-url': `url(${backImg})` } as React.CSSProperties}
            >
                <RevealOnScroll
                    animation="zoom"
                >
                    <div className={s.title}>Наши услуги</div>
                </RevealOnScroll>
                    {services.map((block) => (

                        <RevealOnScroll animation="zoom">
                            <InfoBlock
                            key={block.blockName}
                            propsPrices={block.items}
                            blockName={block.blockName}
                        />
                        </RevealOnScroll>

                    ))}
                    {additionalServices.map((block) => (
                        <RevealOnScroll animation="fade">
                            <InfoBlock
                            key={block.blockName}
                            propsPrices={block.items}
                            blockName={block.blockName}
                        />
                        </RevealOnScroll>
                    ))}
                    {cosmetics.map((block) => (
                        <RevealOnScroll animation="zoom">
                            <InfoBlock
                            key={block.blockName}
                            propsPrices={block.items}
                            blockName={block.blockName}
                        />
                        </RevealOnScroll>
                    ))}
            </div>
        </>

    );
};

export default InfoBlocks;