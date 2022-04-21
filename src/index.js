import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

import { presistor } from "./Redux/Store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={presistor}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
