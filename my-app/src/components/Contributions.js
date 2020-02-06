import React, {Component} from "react";
import data from "../firebase";
import Charity from "./Charity";
import Ngo from "./Ngo";
import LocalFund from "./LocalFund";

class Contributions extends Component {

    state = {
        charities: [],
        ngos: [],
        localFunds: [],
        active: "charities",
        listCount: 0,
        perPage: 3,
        currentPage: 1
    };
    handleClick = (e) => {
        const collection = e.target.dataset.name;

        if (collection === "charities") {
            return this.setState({
                listCount: this.state.charities.length,
                currentPage : 1,
                active : collection});
        }
        else if (collection === "ngos") {
            return this.setState({
                listCount: this.state.ngos.length,
                currentPage : 1,
                active : collection});

        }
        else if (collection === "localFunds") {
            return this.setState({
                listCount: this.state.localFunds.length,
                currentPage : 1,
                active : collection});
        }
    };
    pageHandler = (e)=> {
        this.setState({
            currentPage: Number(e.target.id)
        });
    };
    renderPages = () => {
        let pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.listCount / this.state.perPage); i++) {
            pageNumbers.push(i);
        }
        if (pageNumbers.length >= 2) {
            return pageNumbers.map(number => {
                return (
                    <li className="contributions_pagination_btn"
                        key={number}
                        id={number}
                        onClick={this.pageHandler}
                    >
                        {number}
                    </li>
                );
            });
        }
    };

    renderOrg = () => {
        const indexOfLastEl = this.state.currentPage * this.state.perPage;
        const indexOfFirstEl = indexOfLastEl - this.state.perPage;
        let currentEl = this.state.charities.slice(indexOfFirstEl, indexOfLastEl);

        if (this.state.active === "charities") {
            currentEl = this.state.charities.slice(indexOfFirstEl, indexOfLastEl);
            return currentEl.map((el, index) => {
                return <Charity e={el} key ={index}/>
            })
        } else if (this.state.active === "ngos") {
            currentEl = this.state.ngos.slice(indexOfFirstEl, indexOfLastEl);
            return currentEl.map((el) => {
                return <Ngo e={el}/>
            })
        } else if (this.state.active === "localFunds") {
            currentEl = this.state.localFunds.slice(indexOfFirstEl, indexOfLastEl);
            return currentEl.map((el) => {
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
                    {this.renderOrg()}
                </div>
                <ul className="contributions_pagination">
                    {this.renderPages()}
                </ul>
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
                });
                this.setState({listCount : this.state.charities.length})
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