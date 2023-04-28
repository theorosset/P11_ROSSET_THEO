import { useState, FC } from "react"
import PropTypes, { InferProps } from 'prop-types';

import "./Collapse.scss"


const propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    marginUse: PropTypes.bool,
    equipments: PropTypes.array
};

const Collapse: FC<InferProps<typeof propTypes>> = ({title, text, marginUse, equipments}) => {
   const [isShow, setIsShow] = useState<Boolean>()

    function openCollapse() {
        const show = !isShow
        setIsShow(show)
    }
    
    return (
        <div className={`container__collapse ${marginUse ? "collapse--margin" : ""}`}>
            <div className="container__collapse__title" onClick={openCollapse}>
                <p>{ title }</p>
                <i className={`fas fa-chevron-${isShow ? 'up' : 'down'}`}></i>
            </div>
            {  isShow &&
            <div className="container__collapse__items">
                { text && <p className="container__collapse__items--text">{ text }</p> }
                { equipments && equipments.map((equipment) => (
                    <p className="container__collapse__items--equipments">{equipment}</p>
                )) }
            </div>
            }
        </div>
    )
}

export  { Collapse }