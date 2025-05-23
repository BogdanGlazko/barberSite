import s from '../infoBlocks/InfoBlocks.module.scss'
import InfoBlock from "./Infoblock.tsx";
import {RevealOnScroll} from "../../AdditionalComponents/RevealOnScroll/RevealOnScroll.tsx";


const InfoBlocks = () => {
    const services = [
        {
            blockName: "Стрижка и бритье",
            items: [
                {name: "Стрижка Классическая", price: 35},
                {name: "Под Машинку", price: 20},
                {name: "Оформление бороды", price: 25},
                {name: "Бритьё бороды", price: 15},
                {name: "Бритьё головы", price: 15}]
        }
    ];
    const additionalServices = [
        {
            blockName: "Дополнительные  услуги",
            items: [
                {name: "Стайлинг", price: 10},
                {name: "Камуфляж бороды", price: 20},
                {name: "Камуфляж волос", price: 25},
                {name: "Коррекция бровей", price: 5},
            ]
        }
    ];
    const cosmetics = [
        {
            blockName: "Уход",
            items: [
                {name: "Matt Gloss", price: 25},
                {name: "Matt Wax", price: 25},
                {name: "Воск-паста", price: 50},
                {name: "Пудра", price: 20},
                {name: "Шампунь Studio", price: 35}]
        }
    ];


    return (
        <>



            <div className={s.container}>
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