import ACTION_TYPE from "../ActionType/actionType";

const initalState = {
    num: 0,
    dataTwo: 10,
    showPopUp: false,
    Items: [],
};

const userReducer = function (state = initalState, action) {
    switch (action.type) {
        case ACTION_TYPE.INC:
            return {
                ...state,
                num: state.num + action.payload,
            };

        case ACTION_TYPE.SECOND_INC:
            return {
                ...state,
                dataTwo: state.dataTwo + action.payload,
            };

        case ACTION_TYPE.SHOW_POPUP:
            return {
                ...state,
                showPopUp: action.payload,
            };

        case ACTION_TYPE.ADD_TO_CART:
            return {
                ...state,
                Items: state.Items.concat(action.payload),
            };

        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
