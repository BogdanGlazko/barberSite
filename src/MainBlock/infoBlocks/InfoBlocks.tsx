import s from '../infoBlocks/InfoBlocks.module.scss'
import InfoBlock from "./Infoblock.tsx";
import GradientSeparatorBottomPage from "../../AdditionalComponents/GradientEffect/GradientSeparatorBottom.tsx";
import GradientSeparatorPage from "../../AdditionalComponents/GradientEffect/GradientSeparator.tsx";

const InfoBlocks = () => {
    const services = [
        {
            blockName: "Основные  услуги",
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
                {name: "Воск-паста “ТЯНУЧКА” +100500 ФИКСАЦИИ(HARD ROCK STYLING),110ml", price: 50},
                {name: "Пудра", price: 20},
                {name: "Шампунь Studio", price: 35}]
        }
    ];


    return (
        <>
            <div className={s.title}>Наши услуги</div>
            <div className={s.container}>


                {services.map((block) =>(
                    <InfoBlock
                        key={block.blockName}
                        propsPrices={block.items}
                        blockName={block.blockName}
                    />
                ))}
                {additionalServices.map((block) =>(
                    <InfoBlock
                        key={block.blockName}
                        propsPrices={block.items}
                        blockName={block.blockName}
                    />
                ))}
                {cosmetics.map((block) =>(
                    <InfoBlock
                        key={block.blockName}
                        propsPrices={block.items}
                        blockName={block.blockName}
                    />
                ))}


            </div>
        </>

    );
};

export default InfoBlocks;