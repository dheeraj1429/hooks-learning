import React from "react";
import { connect } from "react-redux";
import { AddToCartItem } from "../../Redux/Action/action";
import { selectCartItems } from "./CartItem.selector";
import { createStructuredSelector } from "reselect";

function CartItemComponent({ item, addToCartHandler }) {
    console.log("cart component rerender");

    return (
        <>
            <p>{item}</p>
            <button onClick={() => addToCartHandler({ data: "cart itmes", num: item.length })}>add to cart</button>
        </>
    );
}

const mapStateToProps = function () {
    console.log("cart item render");

    return createStructuredSelector({
        item: selectCartItems,
    });
};

const mapDispatchToProps = (dispatch) => {
    console.log("map dispatch to props");
    return {
        addToCartHandler: function (data) {
            dispatch(AddToCartItem(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemComponent);
