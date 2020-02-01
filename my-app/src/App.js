import React, {Component} from 'react';
import logo from './logo.svg';
import "./scss/main.scss";
import * as Scroll from 'react-scroll';
import {Link as Slink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
