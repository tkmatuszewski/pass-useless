import React from "react";

function HomeHeader() {
    return (
        <div className={"homeHeader_main"}>
            <div className={"homeHeader_menu"}>
                <div className={"homeHeader_logIn"}>
                    <button className={"homeHeader_logBtn"}>Zaloguj</button>
                    <button className={"homeHeader_logBtn"}>Załóż konto</button>
                </div>
                <nav className={"homeHeader_nav"}>
                    <span>Start</span>
                    <span>O co chodzi?</span>
                    <span>O nas</span>
                    <span>Fundacja i Oranizacje</span>
                    <span>Kontakt</span>
                </nav>
            </div>
            <div className={"homeHeader_banner"}>
                <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div>
                    <button>Oddaj rzeczy</button>
                    <button>Zorganizuj zbiórkę</button>
                </div>
            </div>
            <div className={"homeHeader_img"}></div>
        </div>
    )
}

export default HomeHeader