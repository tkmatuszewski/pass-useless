import React, {Component} from 'react';
import HomeHeader from "./HomeHeader.js";
import HomeThreeColumns from "./HomeThreeColumns.js";
import FourSteps from "./FourSteps.js"
import About from "./About.js"
import Contributions from "./Contributions.js"
import ContactForm from "./ContactForm"

function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns />
            <FourSteps />
            <About />
            <Contributions />
            <ContactForm/>
        </>
    )
}

export default Home;