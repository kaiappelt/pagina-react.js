import React from "react";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { Contato } from "./components/Contato/Contato"
import "./style/app.css";
import { Footer } from "./components/Footer/Footer/Footer";

function App() {
  return (
    <div className='App' >
        <Nav />
        <Main />
        <Contato />
        <Footer />
    </div>
  );
}

export default App;
