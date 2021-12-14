import react, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, Routes } from "react-router-dom";


//pages
import AppNews from "./webpages/AppNews";
import Home from "./Home";
import Login2 from "./webpages/Login2";
import UserNews from "./webpages/UserNews";

function App() {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/etiNews" element={<AppNews/>}/>
                <Route path="/userNews" element={<UserNews/>}/>
                <Route path="/login2" element={<Login2/>}/>
            </Routes>
        </Router>
        );
    
}


export default App;