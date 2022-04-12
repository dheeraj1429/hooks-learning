import React from "react";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router";
import { createBrowserHistory } from "history";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        const history = createBrowserHistory();

        return (
            <Routes>
                <Route path="/" element={<HomePage history={history} inc={1} />} />
            </Routes>
        );
    }
}

export default App;
