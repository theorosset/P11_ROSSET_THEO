import { FC, useEffect, useState } from "react"
import Banniere from "../../Component/banniere/Banniere"
import { Collapse } from "../../Component/collapse/Collapse"
import Header from "../../Component/header/Header"
import axios from "axios"
import './Apropos.scss'
import { aProposData } from "../../Models/aProposData"

const Apropos: FC = () => {
    const [data, setData] = useState<aProposData[]>([])

    useEffect(() => {
        axios.get<aProposData[]>('./Apropos.json').then((res) => setData(res.data)).catch((err) => console.error(err))
    }, [])

    return (
        <div className="container__apropos">
            <Header/>
            <Banniere isHome={false} />
            <div className="container__apropos__collapse">
                {
                    data.map((element: {title: string, text: string, id: number}) => 
                        <Collapse key={element.id} title={element.title} text={element.text} />
                    )
                }
            </div>
        </div>
    )
}

export default Apropos