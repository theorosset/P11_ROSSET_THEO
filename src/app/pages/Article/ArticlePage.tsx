import Carousel from "../../Component/Carousel/Carousel"
import { Article } from "../../Models/articles";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";


const ArticlePage: FC = () => {
    const [article, setArticle] = useState<Article>()
    const [articleId, setArticleId] = useSearchParams()

    useEffect(() => {
        axios.get('./data.json')
        .then((res: { data: Article[]}) => setArticle(res.data.find((article) => article.id === articleId.get('id'))))
        .catch((err) =>  console.error(err))
    }, [])
    
    console.log(article)
    return (
        <div>
            <Header />
            <Carousel article={ article }/>
        </div>
    )
}

export default ArticlePage