import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "../AppNews.css";
import News from "../components/News";
import Etiquetas from "../components/Etiquetas";

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function AppNews() {

  return (
    <div style={{backgroundColor: 'lightsalmon'}}>
      <h1 className="head__text" >Lectura, analisis y etiquetado de noticias 👋</h1>
      <div className="App" style={ {backgroundColor: 'moccasin'}}>
        <News/>

      </div>
      
    </div>
  );
}

export default AppNews;
