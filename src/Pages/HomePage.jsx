import React from "react";
import * as Home from "./HomePage.style";

class HomePage extends React.Component {
    constructor() {
        super();

        this.changeUrlHandler = this.changeUrlHandler.bind(this);

        this.state = {
            num: 1,
        };
    }

    changeUrlHandler() {
        // this.props.history.push("/new");
        // console.log(this.props.history);
        // this.setState({ num: this.state.num + 1 });

        this.setState(
            (PrvState, PrvProp) => {
                return { num: PrvState.num + PrvProp.inc };
            },
            () => {
                console.log(this.state.num);
            }
        );
    }

    render() {
        return (
            <Home.div>
                <p>{this.state.num}</p>
                <button onClick={this.changeUrlHandler}>click</button>
            </Home.div>
        );
    }
}

export default HomePage;
