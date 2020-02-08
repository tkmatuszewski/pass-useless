import React, {Component} from 'react';
import "./scss/main.scss";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home.js";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Route path='/' component={Home} />
                </>
            </BrowserRouter>
        );
    }
}

export default App;
