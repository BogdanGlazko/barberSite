import s from './FloatingBar.module.scss';
import {RevealOnScroll} from "../RevealOnScroll/RevealOnScroll.tsx";

const FloatingBar = () => {

    return (
        <div className={s.floatingBar}>

            <RevealOnScroll animation="zoom">
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
            </RevealOnScroll>

        </div>

    );
};

export default FloatingBar;
