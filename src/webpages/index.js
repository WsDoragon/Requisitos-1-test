import react from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import AppNews from "./AppNews";
import Login from "./login";
const Webpages = () => {
    return(
        <Router>
            <Routes exact path ="/" component = {Login} />
            <Routes path ="/AppNews" component = {AppNews} />
        </Router>
    );
};

export default Webpages;