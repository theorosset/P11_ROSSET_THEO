import "./Banniere.scss"
import { FC } from "react";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    isHome: PropTypes.bool,
}

const Banniere: FC<InferProps<typeof propTypes>> = (isHome) => {
    if (isHome.isHome) {
        return (
            <div className="banniere">
                <img className="banniere__image" src={require("../../assets/banniere/BanniereHome.png")} alt="Banniere home" />
                <p className="banniere__text">Chez vous, partout et ailleurs </p>
            </div>
        )
       
    } else {
        return (
            <div className="banniere">
                <img className="banniere__image" src={require("../../assets/banniere/BanniereApropos.png")} alt="Banniere home"></img>
            </div>
            )
    }
}

export default Banniere