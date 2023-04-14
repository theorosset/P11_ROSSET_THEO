import "./Banniere.scss"

function Banniere(isHome: { isHome: boolean }) {
    console.log(isHome)
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