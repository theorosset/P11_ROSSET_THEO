import { FC } from "react"
import { Article } from "../../Models/articles"
import "./Vendor.scss"


const Vendor: FC<Partial<Article>> = ({host, rating}) => {
    return (
    <div className="container__vendor">
        <div className="container__vendor--item">
            <p className="container__vendor--name">{ host?.name }</p>
            <img className="container__vendor--img" src={ host?.picture } alt="vendeur" />
        </div>
    </div>
    )
}

export default Vendor