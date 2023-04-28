import Carousel from "../../Component/Carousel/Carousel"
import { Article } from "../../Models/articles";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import { Collapse } from "../../Component/Collapse/Collapse";
import './ArticlePage.scss'

const ArticlePage: FC = () => {
    const [article, setArticle] = useState<Article | null>(null)
    const [articleId, setArticleId] = useSearchParams()

    useEffect(() => {
        axios.get('./data.json')
        .then((res: { data: Article[]}) => setArticle(res.data.find((article) => article.id === articleId.get('id')) ?? null))
        .catch((err) =>  console.error(err))
    }, [])
    
    console.log(article)
    if (!article) {
        return <p>is Loading</p>
    } 
    
    return (
        <div className="container__articlePage">
            <Header />
            <Carousel article={ article } />
            <div className="container__articlePage__description">
                <div className="container__articlePage__description--appartement">
                    <h1 className="container__articlePage__description--title">{ article?.title }</h1>
                    <p className="container__articlePage__description--subtitle">{ article?.title }</p>
                    <ul className="container__articlePage__description--tags">
                        {article?.tags.map((tag: string, index: number) => (
                            <li key={ index }>{ tag }</li> 
                        ))}
                    </ul>
                </div>
                <div className="container__articlePage__description--user">
                    <p>{ article?.host.name }</p>
                    <img src={ article?.host.picture } alt="vendeur" />
                </div>
            </div>
            <div className="container__articlePage__collapse">
                <Collapse text={article?.description} title="Description"  marginUse={true} />
                <Collapse text={article?.equipments}  title="Equipement"/>
            </div>
        </div>
    )
}

export default ArticlePage