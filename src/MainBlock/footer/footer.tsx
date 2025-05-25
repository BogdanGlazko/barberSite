// Footer.jsx
import s from "../footer/footer.module.scss";
import logo from "../../assets/mainLogoImages/noBackgr.png"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div>
                    <div className={s.logoWraper}>
                        <img src={logo} className={s.logoStyle} alt=""/>
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
