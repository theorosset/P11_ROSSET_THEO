import Carousel from "../../Component/carousel/Carousel"
import { Article } from "../../Models/articles";
import { Route, Routes, useSearchParams } from "react-router-dom";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import Header from "../../Component/header/Header";
import { Collapse } from "../../Component/collapse/Collapse";
import Vendor from "../../Component/vendor/Vendor";
import RateAppartement from "../../Component/rateAppartement/RateAppartement"
import Page404 from "../page404/Page404";
import './ArticlePage.scss'

const ArticlePage: FC = () => {
    const [article, setArticle] = useState<Article | null>(null)
    const [articleId, setArticleId] = useSearchParams()

    useEffect(() => {
        axios.get('./data.json')
        .then((res: { data: Article[]}) => setArticle(res.data.find((article) => article.id === articleId.get('id')) ?? null))
        .catch((err) =>  console.error(err))
    }, [])

    if (!article) {
        return (
        <Routes>
            <Route path="*" Component={Page404} />
        </Routes>
        )
    }
    
    return (
        <div className="container__articlePage">
            <Header />
            <Carousel article={ article } />
            <div className="container__articlePage__description">
                <div className="container__articlePage__description--appartement">
                    <h1 className="container__articlePage__description--title">{ article.title }</h1>
                    <p className="container__articlePage__description--subtitle">{ article.title }</p>
                    <ul className="container__articlePage__description--tags">
                        { article.tags.map((tag: string, index: number) => (
                            <li key={ index }>{ tag }</li> 
                        )) }
                    </ul>
                </div>
                <div className="container__articlePage__vendor">
                    <Vendor host={ article.host } rating={ article.rating }/>
                    <RateAppartement rating={ article.rating }/>
                </div>
            </div>
            <div className="container__articlePage__collapse">
                <Collapse text={ article.description } title="Description"  marginUse={ true } />
                <Collapse equipments={ article.equipments }  title="Equipement" marginUse={ false }/>
            </div>
        </div>
    )
}

export default ArticlePage