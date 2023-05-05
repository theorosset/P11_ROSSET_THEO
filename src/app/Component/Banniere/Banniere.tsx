import "./Banniere.scss"
import { FC } from "react";
import PropTypes, { InferProps } from 'prop-types';
import BanniereHome from '../../assets/banniere/BanniereHome.png'
import BanniereApropos from '../../assets/banniere/BanniereApropos.png'

const propTypes = {
    isHome: PropTypes.bool,
}

const Banniere: FC<InferProps<typeof propTypes>> = ({isHome}) => {
    if (isHome) {
        return (
            <div className="banniere">
                <img className="banniere__image" src={BanniereHome} alt="Banniere home" />
                <p className="banniere__text">Chez vous, partout et ailleurs </p>
            </div>
        )
       
    } else {
        return (
            <div className="banniere">
                <img className="banniere__image apropo" src={BanniereApropos} alt="Banniere home"></img>
            </div>
            )
    }
}

export default Banniere