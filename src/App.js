import React from "react";
import { Routes, Route } from "react-router";
import { createBrowserHistory } from "history";
import HomePage from "./Pages/HomePage";
import IncComponent from "./Components/IncComponent/IconComponent";
import PopUpComponent from "./Components/PopUpComponent/PopUpComponent";
import ToggleComponent from "./Components/ToggleComponent/ToggleComponent";
import CartItemComponent from "./Components/CartItemComponent/CartItemComponent";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        const history = createBrowserHistory();

        return (
            <>
                <IncComponent />
                <CartItemComponent />
            </>
            // <>
            //     <PopUpComponent />
            //     <ToggleComponent />
            // </>
        );
    }
}

export default App;
