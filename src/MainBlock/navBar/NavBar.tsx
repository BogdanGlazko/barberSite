import s from "./navBar.module.scss"
function NavBar() {
    return (
        <div className={s.wrapperBtns}>
            <div className={s.btnBlockWrapper}>
                <button className={s.btnHeader}>О нас</button>
                <button className={s.btnHeader}>Контакты</button>
                <button className={s.btnHeader}>Instagram</button>
            </div>

        </div>
    )

}

export default NavBar