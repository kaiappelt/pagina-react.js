import React from "react";
import { MainTextStyle } from "./MainTextStyle"

function MainText(props) {
  return (
    <MainTextStyle>
         <div className="Conteudo">
             <h4>{props.titulo}</h4>

             <p>{props.texto}</p>
         </div>
    </MainTextStyle>
  );
}

export { MainText };
