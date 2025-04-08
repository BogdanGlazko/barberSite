import s from '../bookingAndImage/BookAndImage.module.scss'

const BookAndImage = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.textBtnWrapper}>
                <div>Барбершоп КартБланш — это больше, чем просто стрижка.
                    Мы создаем стиль, подчеркивая твою индивидуальность.
                    Заходи, чтобы обновить образ и зарядиться уверенностью!</div>
                <div className={s.wrap}>
                    <button className={s.button}>Записаться</button>
                </div>
            </div>
        </div>
    );
};

export default BookAndImage;