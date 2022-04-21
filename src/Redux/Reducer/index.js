import { combineReducers } from "redux";
import userReducer from "./reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    userStoreData: userReducer,
});

const config = {
    key: "root",
    storage,
    whitelist: ["userStoreData"],
};

export default persistReducer(config, rootReducer);
