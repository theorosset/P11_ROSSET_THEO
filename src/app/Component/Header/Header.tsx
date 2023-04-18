import { NavLink, useLocation } from "react-router-dom";
import "./header.scss"
// navLink look if can get props isActive
const Header = () => {
    return (
        <header className="header">
            <img src={require('../../assets/logo/logo.png')} alt="logo" />
            <nav className="header__nav">
                <NavLink className={({ isActive }) => isActive ? "header__nav--link--focus" : "header__nav--link" }  to="/">Accueil</NavLink>
                <NavLink className={({ isActive }) => isActive ? "header__nav--link--focus" : "header__nav--link" } to="/propos">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header