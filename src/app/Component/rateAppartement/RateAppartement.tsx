import { FC } from "react";
import "./RateAppartement.scss"
import { Article } from "../../Models/articles";


interface Props {
    article: Article
}


const RateAppartement: FC<Partial<Article>> = ({rating}) => {
    
    return (
        <div className="container__star">
            { rating &&
                Array.from({length: 5},(_, i) => (
                    <i key={i} className={`${rating < i + 1 ? 'container__star--starGrey' : 'container__star--starColor'} fas fa-star`}></i>
                ))
            }
        </div>
    )
}


export default RateAppartement