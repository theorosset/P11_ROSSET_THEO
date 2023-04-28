import { FC, useEffect, useState } from "react"
import Banniere from "../../Component/Banniere/Banniere"
import { Collapse } from "../../Component/Collapse/Collapse"
import Header from "../../Component/Header/Header"
import axios from "axios"
import './Apropos.scss'
import { aProposData } from "../../Models/aProposData"

const Apropos: FC = () => {
    const [data, setData] = useState<aProposData[]>([])

    useEffect(() => {
        axios.get<aProposData[]>('./Apropos.json').then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    return (
        <div className="container__apropro">
            <Header/>
            <Banniere isHome={false} />
            {
                data.map((element: {title: string, text: string, id: number}) => 
                    <Collapse key={element.id} title={element.title} text={element.text} />
                )
            }
        </div>
    )
}

export default Apropos