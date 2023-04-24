import { useEffect, useState } from "react";

const Carousel = ({ article } : any ) => {
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
        <div>
            <img src={ article?.pictures[imageRead] } onClick={getPrevImage} alt="appartement"/>
            <h1>{article?.id} oui</h1>
        </div>
    )
}


export default Carousel