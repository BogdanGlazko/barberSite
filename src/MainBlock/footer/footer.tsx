// Footer.jsx
import s from "../footer/footer.module.scss";
import logo from "../../assets/mainLogoImages/noBackgr.png"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.instagramWrapper}>
                {/*<a*/}
                {/*    href="https://www.instagram.com/carteblanche.br/"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*    className={s.instagramFixed}*/}
                {/*>*/}
                {/*    <img*/}
                {/*        src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"*/}
                {/*        alt="Instagram Carte Blanche Barbershop"*/}
                {/*    />*/}
                {/*</a>*/}

            </div>

            <div className={s.container}>
                <div>
                    <div className={s.logoWraper}>
                        <img src={logo} className={s.logoStyle} alt="logoBarber"/>
                    </div>
                </div>
                <div className={s.copyright}>
                    <p>Лучшее место для стильных стрижек</p>
                    © {new Date().getFullYear()} Barbershop CartBlanche
                </div>
            </div>
        </footer>
    );
};

export default Footer;
