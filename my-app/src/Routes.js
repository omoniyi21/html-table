import React from "react";
import {Route,Switch,HashRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Home/Home";

export default () =>

<HashRouter>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Blog" exact component={Blog}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/Shop" exact component={Shop}/>
    </Switch>
</HashRouter>