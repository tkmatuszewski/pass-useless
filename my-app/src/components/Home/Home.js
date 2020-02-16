import React, {Component} from 'react';
import HomeHeader from "../HomeHeader/HomeHeader.js";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns.js";
import FourSteps from "../FourSteps/FourSteps.js"
import About from "../About/About.js"
// import Contributions from "../Contributions/Contributions.js"
import ContactForm from "../ContactForm/ContactForm"

function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns />
            <FourSteps />
            <About />
            {/*<Contributions />*/}
            <ContactForm/>
        </>
    )
}

export default Home;