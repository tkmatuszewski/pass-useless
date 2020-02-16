import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

class LogOut extends Comment {
    render() {
        return (
            <>
                <div className={"homeHeader_menu"}>
                    <div className={"homeHeader_logIn"}>
                        <div className={"homeHeader_logBtn"}><Link to="/logowanie">Zaloguj</Link></div>
                        <div className={"homeHeader_rgstr"}><Link to="/rejestracja">Załóż konto</Link></div>
                    </div>
                    <nav className={"homeHeader_nav"}>
                        <li><ScrollLink to="home" smooth={true}>Start</ScrollLink></li>
                        <li><ScrollLink to="fourSteps" smooth={true}>O co chodzi?</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true}>O nas</ScrollLink></li>
                        <li><ScrollLink to="contributions" smooth={true}>Fundacja i Oranizacje</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true}>Kontakt</ScrollLink></li>
                    </nav>
                </div>
                <div className="logIn_header">
                    <h3 className="logIn_header_title">Załóż konto</h3>
                    <div className="logIn_header_decor"></div>
                </div>
            </>
        )
    }
}

export default LogOut