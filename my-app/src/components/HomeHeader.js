import React from "react";
import {Link} from "react-router-dom";
import {Link as Blink} from "react-scroll"

function HomeHeader() {
    // state = {
    //   active : false
    // };
    // function activate  {
    //     this.setState({active: !this.state.active});
    //     if (this.state.active) {
    //         this.className={"active"}
    //     }
    // };
    return (
        <div className={"homeHeader_main"}>
            <div className={"homeHeader_menu"}>
                <div className={"homeHeader_logIn"}>
                    <div className={"homeHeader_logBtn"}><Link to="/logowanie">Zaloguj</Link></div>
                    <div className={"homeHeader_rgstr"}><Link to="/rejestracja">Załóż konto</Link></div>
                </div>
                <nav className={"homeHeader_nav"}>
                    <span><Blink to={"/start"}> Start </Blink></span>
                    <span>O co chodzi?</span>
                    <span>O nas</span>
                    <span>Fundacja i Oranizacje</span>
                    <span>Kontakt</span>
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