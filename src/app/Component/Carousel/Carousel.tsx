import { FC, useEffect, useState } from "react";
import './Carousel.scss'
import { Article } from "../../Models/articles";

interface Props {
    article: Article
}

const Carousel: FC<Props> = ({ article }) => {
    const [imageRead, setImageRead] = useState(0);

    function getNextImage() {
        let imageNumber = imageRead

        if(imageNumber === article.pictures.length - 1) {
            return setImageRead(0)
        }
        setImageRead(imageNumber + 1)
    }

    function getPrevImage() {
        let imageNumber = imageRead
        if(imageNumber === 0) {
            return setImageRead(article.pictures.length - 1)
        }
        setImageRead(imageNumber - 1)
    }

    return (
        <div className="container__carousel">
            <img className="container__carousel--img" src={ article?.pictures[imageRead] } onClick={getPrevImage} alt="appartement"/>
            { article?.pictures.length > 1 &&
            <div>
                <i onClick={getPrevImage} className="container__carousel--iconLeft fas fa-chevron-left"></i>
                <i onClick={getNextImage} className="container__carousel--iconRight fas fa-chevron-right"></i>
            </div>
            }
        </div>
    )
}


export default Carousel