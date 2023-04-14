import { useState, FC } from "react"
import PropTypes, { InferProps } from 'prop-types';

import "./Collapse.scss"


const propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

const Collapse: FC<InferProps<typeof propTypes>> = ({title, text}) => {
   const [isShow, setIsShow] = useState<Boolean>()

    function openCollapse() {
        const show = !isShow
        setIsShow(show)
    }


    return (
        <div className="container__collapse">
            <div className="container__collapse__title" onClick={openCollapse}>
                <p>{ title }</p>
                <i className={`fas fa-chevron${isShow ? '-up' : '-down'}`}></i>
            </div>
            {  isShow &&
            <div className="container__collapse__text">
                <p>{ text }</p>
            </div>
            }
        </div>
    )
}

export  { Collapse }