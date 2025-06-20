import { useEffect, useState } from 'react';
import s from './FloatingBar.module.scss';

const FloatingBar = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log('scrollY:', window.scrollY);
            setShowScrollTop(window.scrollY > 20);
        };

        // Добавляем слушатель
        window.addEventListener('scroll', handleScroll);

        // Чистим слушатель при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={s.floatingBar}>
            <a
                href="https://www.instagram.com/carteblanche.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={s.instaBlock}
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                    alt="Instagram Carte Blanche"
                />
                <span>@carteblanche.br</span>
            </a>

            {showScrollTop && (
                <button className={s.scrollTopButton} onClick={scrollToTop}>
                    ⬆
                </button>
            )}
        </div>
    );
};

export default FloatingBar;
