import "./Banniere.scss"

function Banniere(isHome: { isHome: boolean }) {
    if (isHome) {
      return (
        <div className="banniere">
            <img className="banniere__image" src={require("../../assets/banniere/BanniereHome.png")} alt="Banniere home" />
            <p className="banniere__text">Chez vous, partout et ailleurs</p>
        </div>
        )
       
    } else {
        return <img src="../../assets/banniere/BanniereArticle.png" alt="Banniere home"></img>
    }
}

export default Banniere