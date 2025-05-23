import s from './StarBackground.module.scss';

const StarBackground = () => {
    return (
        <div className={s.starsWrapper}>
            <div className={s.stars}></div>
            <div className={s.stars2}></div>
            <div className={s.stars3}></div>
        </div>
    );
};

export default StarBackground;
