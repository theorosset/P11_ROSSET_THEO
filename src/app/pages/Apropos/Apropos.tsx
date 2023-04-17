import { FC, useEffect, useState } from "react"
import Banniere from "../../Component/Banniere/Banniere"
import { Collapse } from "../../Component/Collapse/Collapse"
import Header from "../../Component/Header/Header"
import axios from "axios"

const Apropos: FC = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('./Apropos.json').then(res => setData(res.data)).catch((err) => console.log(err))
    }, [])

    return (
        <div>
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