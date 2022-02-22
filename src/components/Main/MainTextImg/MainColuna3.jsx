import React from "react";
import { MainText } from "../MainText/MainText";
import { MainImg } from "../MainImg/MainImg";
import { MainColunaStyle } from "./MainColunaStyle";
import styled2Img from "../../../assets/img/styled2.png"

function MainColuna3() {
  return (
    <MainColunaStyle>
          <div className="MainColunaStyle">
            <MainText 
              titulo="O que é Styled Component?"
              texto="
              Trata-se de uma biblioteca (lib) que nos permite escrever códigos CSS dentro do JavaScript.
              Dessa maneira não precisamos mais ficar importando nossos arquivos .css em nossas páginas,
              e se um dia precisarmos utilizar esse mesmo componente em outro projeto, uma das maneiras 
              seria basicamente copiar o arquivo .js.
              Com o styled-components também ganhamos de brinde compatibilidade de browsers.
              Também ganhamos a regra de CSS Modules, o Styled cria um hash nas classes CSS, 
              assim, cada componente conhece apenas o seu CSS, uma mudança em um componente será refletida somente nele.
              Além de inúmeras outras vantagens, como a possibilidade de utilizar media queries de forma similar à que
              utilizamos com pré-processadores, sem contar que também é possível utilizar elementos aninhados, pseudo-elements,
              inclusive estilizar as tags html e body.   "
            />

            <MainImg 
              imagem={styled2Img}
            />
          </div>
    </MainColunaStyle>
  );
}

export { MainColuna3 };