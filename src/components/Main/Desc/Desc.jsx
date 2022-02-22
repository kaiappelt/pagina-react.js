import React from "react";
import { CardDesc } from "./../CardDesc/CardDesc"
import { DescStyle } from "./DescStyle"
import { AiOutlineDesktop } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";

function Desc() {
  return (
    <DescStyle>
         <CardDesc 
            titulo="Somente para Desktop"
            texto="Vamos aprender como utilizar um framework."
         >
            <h5>
                <AiOutlineDesktop />
            </h5>
         </CardDesc>    

         <CardDesc 
            titulo="Criando com componentes"
            texto="Utilizando o Styled Components."
         >
            <h5>
                <ImFilesEmpty />
            </h5>
         </CardDesc> 

         <CardDesc 
            titulo="Fácil aproveitamento"
            texto="Estamos no caminho."
         >
            <h5>
                <BsCheckCircle />
            </h5>
         </CardDesc> 
    </DescStyle>
  );
}

export { Desc };
