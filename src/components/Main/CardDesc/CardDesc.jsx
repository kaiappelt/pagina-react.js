import React from "react";
import "./../Desc/DescStyle";
import "./CardDescStyle"
import { CardDescStyle } from "./CardDescStyle";

function CardDesc(props) {
    return(
        <CardDescStyle>
            <div className='CardDesc'>
                <span>{props.children}</span>  
                <h4>{props.titulo}</h4>
                <p>{props.texto}</p>
            </div>
        </CardDescStyle>
    )
}
export { CardDesc };