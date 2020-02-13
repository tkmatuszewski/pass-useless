import React, {Component} from 'react';
import "./scss/main.scss";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import LogIn from "./components/LogIn";
import Register from "./components/Register"


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/logowanie' component={LogIn}/>
                    <Route path='/rejestracja' component={Register}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
