import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "../AppNews.css";

import NewsUser from "../components/NewsUser";


const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function UserNews() {

  return (
    <div style={{backgroundColor: 'lightsalmon'}}>
      <h1 className="head__text" >Lectura de noticias 👋</h1>
      <div className="App" style={ {backgroundColor: 'moccasin'}}>
        <NewsUser/>
      </div>
      
    </div>
  );
}

export default UserNews;
