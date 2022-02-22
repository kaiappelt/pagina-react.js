import React from "react";
import { Desc } from "./Desc/Desc";
import { MainColuna1 } from "./MainTextImg/MainColuna1";
import { MainColuna2 } from "./MainTextImg/MainColuna2";
import { MainColuna3 } from "./MainTextImg/MainColuna3";


function Main() {
  return (
    <div className="Main">
            <Desc />
            <MainColuna1 />
            <MainColuna2 />
            <MainColuna3 />
    </div>
    
  );
}

export { Main };
