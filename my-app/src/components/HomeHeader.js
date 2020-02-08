import React from "react";
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'


function HomeHeader() {
    return (
        <div className={"homeHeader_main"} id="home">
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
            <div className={"homeHeader_banner"}>
                <div className={"homeHeader_bannerCnt"}>
                    <h2 className={"homeHeader_bannerTitle"}><span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span></h2>
                    <div className={"homeHeader_bannerDecoration"}></div>
                </div>
                <div className={"homeHeader_bannerButtons"}>
                    <div className={"homeHeader_bannerBtnL"}><Link to="/logowanie"><span>Oddaj</span><span>rzeczy</span></Link></div>
                    <div className={"homeHeader_bannerBtnR"}><Link to="/logowanie"><span>Zorganizuj</span><span>zbiórkę</span></Link></div>
                </div>
            </div>
            <div className={"homeHeader_img"}></div>
        </div>
    )
}

export default HomeHeader