import React from "react";
import {Link as Slink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

function Contributions() {
    return (
        <div className="contributions_main">
            <div className="contributions_cnt">
                <div className="contributions_top">
                    <div className="contributions_title">Komu pomagamy?
                        <div className="contributions_decor"></div>
                    </div>
                    <div className="contributions_list">
                        <div className="contributions_list_item">Fundacjom</div>
                        <div className="contributions_list_item">Organizacjom pozarządowym</div>
                        <div className="contributions_list_item">Lokalnym zbiórkom</div>
                    </div>
                    <div className="contributions_info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>
                </div>
            </div>
            <div className="contributions_bottom">
                <div className="contributions_item">
                    <div className="contributions_item_left">
                        <div className="contributions_item_left_title">
                            Fundacja “Dbam o Zdrowie”
                        </div>
                        <div className="contributions_item_left_target">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </div>
                    </div>
                    <div className="contributions_item_left_right">
                        ubrania, jedzenie, sprzęt AGD, meble, zabawki
                    </div>
                </div>
                <div className="contributions_item">
                    <div className="contributions_item_left">
                        <div className="contributions_item_left_title">
                            Fundacja “Dbam o Zdrowie”
                        </div>
                        <div className="contributions_item_left_target">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </div>
                    </div>
                    <div className="contributions_item_left_right">
                        ubrania, jedzenie, sprzęt AGD, meble, zabawki
                    </div>
                </div>
                <div className="contributions_item">
                    <div className="contributions_item_left">
                        <div className="contributions_item_left_title">
                            Fundacja “Dbam o Zdrowie”
                        </div>
                        <div className="contributions_item_left_target">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </div>
                    </div>
                    <div className="contributions_item_left_right">
                        ubrania, jedzenie, sprzęt AGD, meble, zabawki
                    </div>
                </div>
            </div>
            <div className="contributions_pagination">
                <button className="contributions_pagination_btn">1</button>
                <button className="contributions_pagination_btn">2</button>
                <button className="contributions_pagination_btn">3</button>
            </div>
        </div>
    )
}

export default Contributions