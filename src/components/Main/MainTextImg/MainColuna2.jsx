import React from "react";
import { MainText } from "../MainText/MainText";
import { MainImg } from "../MainImg/MainImg";
import { MainColunaStyle } from "./MainColunaStyle";
import codigoImg from "../../../assets/img/codigo.jpg"

function MainColuna2() {
  return (
    <MainColunaStyle>
          <div className="MainColunaStyle">
            <MainImg 
              imagem={codigoImg}
            />

            <MainText 
              titulo="Como funciona React JS?"
              texto="
              Também conhecido como React JS, o componente do React é fácil de escrever porque ele usa JSX,
              uma extensão de sintaxe opcional para JavaScript. Ela permite que você combine HTML com JavaScript.  
             O JSX é uma excelente combinação de JavaScript e HTML. Ela simplesmente simplifica toda a estrutura de 
             codificação escrita de um site. Além disso, a extensão também faz com que a renderização de múltiplas funções seja mais fácil.
             Ainda que o JSX não seja a extensão de sintaxe mais popular, ela tem provado ser bastante eficiente.
              Especialmente quando falamos em desenvolver componentes especiais ou aplicações de alto rendimento.
             "
            />
          </div>
    </MainColunaStyle>
  );
}

export { MainColuna2 };