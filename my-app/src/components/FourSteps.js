import React from "react";
import {Link} from "react-router-dom";

function FourSteps() {
    return (
        <div className={"fourSteps_main"}>
            <div className={"fourSteps_top"}>
                <div className={"fourSteps_top_title"}>
                    Wystarczą 4 proste kroki
                </div>
                <div className={"fourSteps_top_decor"}></div>
            </div>
            <div className={"fourSteps_middle"}>
                <div className={"fourSteps_step_1"}>
                    <div className={"fourSteps_step_icon_1"}></div>
                    <div className={"fourSteps_step_name"}>Wybierz rzeczy</div>
                    <div className={"fourSteps_step_decor"}></div>
                    <div className={"fourSteps_step_content"}>ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className={"fourSteps_step_2"}>
                    <div className={"fourSteps_step_icon_2"}></div>
                    <div className={"fourSteps_step_name"}>Spakuj je</div>
                    <div className={"fourSteps_step_decor"}></div>
                    <div className={"fourSteps_step_content"}>skorzystaj z worków na śmieci</div>
                </div>
                <div className={"fourSteps_step_3"}>
                    <div className={"fourSteps_step_icon_3"}></div>
                    <div className={"fourSteps_step_name"}>Zdecyduj komu chcesz pomóc</div>
                    <div className={"fourSteps_step_decor"}></div>
                    <div className={"fourSteps_step_content"}>wybierz zaufane miejsce</div>
                </div>
                <div className={"fourSteps_step_4"}>
                    <div className={"fourSteps_step_icon_4"}></div>
                    <div className={"fourSteps_step_name"}>Zamów kuriera</div>
                    <div className={"fourSteps_step_decor"}></div>
                    <div className={"fourSteps_step_content"}>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <div className={"fourSteps_bottom"}>
                <div className={"fourSteps_btn"}>
                    <Link to="/logowanie">
                    Oddaj rzeczy
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FourSteps