import { FC } from "react"
import logoWhite from "../../assets/logo/logoWhite.png"
import "./Footer.scss"

const Footer: FC = () => {
    return (
        <footer className="container__footer">
            <div className="container__footer__items">
                <img src={logoWhite} alt="logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer