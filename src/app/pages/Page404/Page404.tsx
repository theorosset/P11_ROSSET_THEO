import Header from "../../Component/header/Header"
import { NavLink } from "react-router-dom"
import './Page404.scss'

const Page404 = () => {
    return (
        <div className="container__404">
             <Header />
            <div className="container__404__item">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
            </div>
        </div>
    )
}

export default Page404