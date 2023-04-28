
import axios from "axios"
import {FC, useEffect, useState } from "react"
import './ArticleList.scss'
import { NavLink } from "react-router-dom"
import { Article } from "../../Models/articles"

//@TODO: type articles was create but cant use in state search who can set it 

const ArticleList: FC = () => {
    const [articles, setArticle] = useState<Article[]>([])

    useEffect(() => {
        axios.get(`./data.json`).then((res) => setArticle(res.data))
    }, [])

    return (
        <ul className="container__article">
            {
                articles.map((article: Article) => (
                    <NavLink to={`/article?id=${article.id}`} className="container__article__link" key={article.id}>
                        <img className="container__article__link--img" src={article.cover} alt={article.title} />
                        <p className="container__article__link--title">{article.title}</p>
                    </NavLink>
                ))
            }
        </ul>
    )
}

export default ArticleList