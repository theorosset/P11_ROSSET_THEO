import { NavLink, useLocation } from "react-router-dom";
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <img src={require('../../assets/logo/logo.png')} alt="logo" />
            <nav className="header__nav">
                <NavLink className={useLocation().pathname === '/' ? "header__nav--link--focus" : "header__nav--link"}  to="/">Accueil</NavLink>
                <NavLink className={useLocation().pathname === '/propos' ? "header__nav--link--focus" : "header__nav--link"} to="/propos">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header