import React from "react";
import {Link} from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation"

function HomeHeader() {
    return  (
        <div className={"homeHeader_main"} id="home">
            {/*<Navigation />*/}
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