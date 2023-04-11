
import axios from "axios"
import { ReactNode, useEffect, useState } from "react"
import './ArticleList.scss'
import { NavLink } from "react-router-dom"

//@TODO: type articles was create but cant use in state search who can set it 

function ArticleList() {
    const [articles, setArticle] = useState([])

    useEffect(() => {
        axios.get(`./data.json`).then((res) => setArticle(res.data))
    }, [])

    return (
        <ul className="container">
            {
                articles.map((article: any) => (
                    <NavLink to={`/article`} className="container__article" key={article.id}>
                        <img className="container__article--img" src={article.cover} alt={article.title} />
                         <p className="container__article--title">{article.title}</p>
                    </NavLink>
                ))
            }
        </ul>
    )
}

export default ArticleList