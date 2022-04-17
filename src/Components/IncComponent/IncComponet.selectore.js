import { createSelector } from "reselect";

const num = (state) => state.userStoreData.num;
// const secondNum = (state) => state.userStoreData.dataTwo;

const secondNumber = (state) => state.userStoreData.dataTwo;

export const secondNumberFun = createSelector([secondNumber], (num) => {
    console.log(num);
    return num;
});

export const numSelector = createSelector([num], (numberAc) => {
    console.log(numberAc);
    return numberAc;
});
