import React from "react";
import { MainImgStyle } from "./MainImgStyle";

function MainImg(props) {
    return (
        <MainImgStyle>
            <div className="MainImg">
                <img src={props.imagem} alt="" />
            </div>
        </MainImgStyle>
    )
}
export { MainImg };