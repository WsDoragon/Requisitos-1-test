import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNews from './webpages/AppNews';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import Login from './webpages/login';
import Webpages from './webpages';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
