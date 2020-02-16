import React, {Component} from 'react';
import "./components/App/app.scss";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/Login/LogIn";
import Register from "./components/Register/Register"
import LogOut from "./components/LogOut/LogOut";
import Firebase, {FirebaseContext} from "./components/Firebase/firebase.index";
import * as ROUTE from "./components/Constants/constants.js"

class App extends Component {
    render() {
        return (
            <FirebaseContext.Provider value={new Firebase()}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTE.home} component={Home}/>
                    <Route path={ROUTE.login} component={LogIn}/>
                    <Route path={ROUTE.register} component={Register}/>
                    <Route path={ROUTE.logout} component={LogOut}/>
                </Switch>
            </BrowserRouter>
        </FirebaseContext.Provider>
        );
    }
}

export default App;
