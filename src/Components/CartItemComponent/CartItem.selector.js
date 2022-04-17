import { createSelector } from "reselect";

// input selector => a input selector is a function, takes a and what he does he just get's the hole state and return the slice from the state, ( which is want to update.. )

const selectCart = (state) => state.userStoreData.Items;

export const selectCartItems = createSelector([selectCart], (Items) => {
    console.log(Items);
    return Items.length;
});
