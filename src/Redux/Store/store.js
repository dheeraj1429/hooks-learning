import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../Reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, ...middlewares)));

export const presistor = persistStore(store);

export default store;
