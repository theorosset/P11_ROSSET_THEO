import { FC, useEffect, useState } from "react";
import { Article } from "../../Models/articles";
import { useSearchParams } from "react-router-dom";
import axios from "axios";



const Carousel: FC = () => {
    const [article, setArticle] = useState<Article>()
    const [articleId, setArticleId] = useSearchParams()
    useEffect(() => {
        axios.get('./data.json').then((res: { data: Article[]}) => setArticle(res.data.find((article) => article.id === articleId.get('id'))) )
    }, [])

    return (
        <h1>{article?.description}</h1>
    )
}


export default Carousel