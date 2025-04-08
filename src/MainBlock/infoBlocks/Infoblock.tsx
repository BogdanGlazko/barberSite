import s from '../infoBlocks/InfoBlocks.module.scss'

interface InfoBlockProps {
    blockName:string;
    propsPrices?: { name: string; price: number }[]
}

const InfoBlock = ({blockName, propsPrices}:InfoBlockProps) => {
    return (
        <>
            <div className={s.dl}>
                <div className={s.hn}>{blockName}</div>
                <div className={s.priceWrapper}>
                    <div className={s.dt}>price</div>
                    <div className={s.dd}>
                        <div className={s.pricesBlock}>
                            {propsPrices?.map(({name, price})=>(
                                <div className={s.price}>
                                    <div>{name}</div>
                                    <div>{price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default InfoBlock;