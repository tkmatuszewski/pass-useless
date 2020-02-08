import React, {Component} from "react";

class Ngo extends Component {
    render() {
        return (
            <div className="contributions_item">
                <div className="contributions_item_left">
                    <div className="contributions_item_left_title">
                        {this.props.e.name}
                    </div>
                    <div className="contributions_item_left_target">
                        Cel i misja: {this.props.e.mission}
                    </div>
                </div>
                <div className="contributions_item_left_right">
                    {this.props.e.items.join(", ")}
                </div>
            </div>
        )
    }
}

export default Ngo