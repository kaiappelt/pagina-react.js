import React from "react";
import { MainText } from "./../MainText/MainText";
import { MainImg } from "./../MainImg/MainImg";
import { MainColunaStyle } from "./MainColunaStyle";
import reactImg from "../../../assets/img/react.jpg"

function MainColuna1() {
  return (
    <MainColunaStyle>
          <div className="MainColunaStyle">
            <MainText 
              titulo="O que é React?"
              texto="
              O React tem sido usado por grandes companhias ao redor do mundo. Algumas delas:
               Netflix, Airbnb, American Express, Facebook, WhatsApp, eBay e Instagram.
               Essa é a prova de que a ferramenta tem um número de vantagens que não têm nem comparação nos seus competidores.
               Sendo uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: 
              tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o
               “V” no padrão MVC (Model-View-Controller).   "
            />

            <MainImg 
              imagem={reactImg}
            />
          </div>
    </MainColunaStyle>
  );
}

export { MainColuna1 };