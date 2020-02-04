import React, {Component} from "react";
import {Link as Slink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import data from "../firebase";
import Charity from "./Charity";
import Ngo from "./Ngo";
import LocalFund from "./LocalFund";

class Contributions extends Component {

    state = {
        charities: [],
        ngos: [],
        localFunds: [],
        active: {name: "charities"},
        listCount: 0
    };

    handleClick = (e) => {
        this.setState({active: e.target.dataset});
        if (this.state.active.name === "charities") {
            this.setState({listCount: this.state.charities.length})
        }
        if (this.state.active.name === "ngos") {
            this.setState({listCount: this.state.ngos.length})
        }
        if (this.state.active.name === "localFunds") {
            this.setState({listCount: this.state.localFunds.length})
        }
    };
    bottomContent = () => {
        if (this.state.active.name === "charities") {
            console.log("charity");
            return this.state.charities.map((el) => {
                return <Charity e={el}/>
            })
        } else if (this.state.active.name === "ngos") {
            console.log("ngo");
            return this.state.ngos.map((el) => {
                return <Ngo e={el}/>
            })
        } else if (this.state.active.name === "localFunds") {
            console.log("local fund");
            return this.state.localFunds.map((el) => {
                return <LocalFund e={el}/>
            })
        }
    };

    render() {
        return (
            <div className="contributions_main" id="contributions">
                <div className="contributions_cnt">
                    <div className="contributions_top">
                        <div className="contributions_title">Komu pomagamy?
                            <div className="contributions_decor"></div>
                        </div>
                        <div className="contributions_list">
                            <div className="contributions_list_item" onClick={this.handleClick}
                                 data-name="charities">Fundacjom
                            </div>
                            <div className="contributions_list_item" onClick={this.handleClick}
                                 data-name={"ngos"}>Organizacjom pozarządowym
                            </div>
                            <div className="contributions_list_item" onClick={this.handleClick}
                                 data-name="localFunds">Lokalnym zbiórkom
                            </div>
                        </div>
                        <div className="contributions_info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                            którymi
                            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </div>
                    </div>
                </div>
                <div className="contributions_bottom">
                    {this.bottomContent()}
                </div>
                {/*<div className="contributions_pagination">*/}
                {/*    <button className="contributions_pagination_btn">1</button>*/}
                {/*    <button className="contributions_pagination_btn">2</button>*/}
                {/*    <button className="contributions_pagination_btn">3</button>*/}
                {/*</div>*/}
            </div>
        )
    }

    componentDidMount() {
        data.collection(`charities`).get().then(
            (el) => {
                el.docs.map((doc) => {
                    this.setState({
                        charities: this.state.charities.concat(doc.data()),
                    });
                })
            });
        data.collection(`NGOs`).get().then(
            (el) => {
                el.docs.map((doc) => {
                    this.setState({
                        ngos: this.state.ngos.concat(doc.data()),
                    });
                })
            });
        data.collection(`localFunds`).get().then(
            (el) => {
                el.docs.map((doc) => {
                    this.setState({
                        localFunds: this.state.localFunds.concat(doc.data()),
                    });
                })
            });
    }
}

export default Contributions