import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

class LogIn extends Component {
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
                <div className="logIn_main">
                    <div className="logIn_header">
                        <h3 className="logIn_header_title">Zaloguj się</h3>
                        <div className="logIn_header_decor"></div>
                    </div>
                    <form action="" className="logIn_form">
                        <div className="logIn_form_cnt">
                            <label htmlFor="" className="logIn_form_mail">Email
                                <input type="email"/>
                            </label>
                            <label htmlFor="" className="logIn_form_password">Hasło
                                <input type="password"/>
                            </label>
                        </div>
                    </form>
                    <div className="logIn_buttons">
                        <button className="logIn_register_btn"><Link to={"/rejestracja"}>Załóż konto</Link></button>
                        <button className="logIn_login_btn">Zaloguj się</button>
                    </div>
                </div>
            </>
        )
    }
}

export default LogIn