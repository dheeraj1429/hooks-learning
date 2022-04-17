import ACTION_TYPE from "../ActionType/actionType";

export const setInc = function (data) {
    return {
        type: ACTION_TYPE.INC,
        payload: data,
    };
};

export const secondInc = function (data) {
    return {
        type: ACTION_TYPE.SECOND_INC,
        payload: data,
    };
};

export const ShowAndHidePopUp = function (data) {
    return {
        type: ACTION_TYPE.SHOW_POPUP,
        payload: data,
    };
};

export const AddToCartItem = function (data) {
    return {
        type: ACTION_TYPE.ADD_TO_CART,
        payload: data,
    };
};
