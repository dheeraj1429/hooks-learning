import React from "react";
import { connect } from "react-redux";
import { AddToCartItem } from "../../Redux/Action/action";
import { selectCartItems } from "./CartItem.selector";
import { createStructuredSelector } from "reselect";

function CartItemComponent({ item, addToCartHandler }) {
    console.log("cart item component render");
    return (
        <>
            <p>{item}</p>
            <button onClick={() => addToCartHandler({ data: "cart itmes", num: item.length })}>add to cart</button>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    item: selectCartItems,
});

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartHandler: function (data) {
            dispatch(AddToCartItem(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemComponent);

// import React from "react";
// import { AddToCartItem } from "../../Redux/Action/action";
// import { useSelector, useDispatch } from "react-redux";

// function CartItemComponent() {
//     console.log("cart component rerender");
//     const selector = useSelector((state) => state.userStoreData.Items);
//     const dispatch = useDispatch();

//     const addToCartHandler = function () {
//         dispatch(AddToCartItem({ data: "cart itmes" }));
//     };

//     return (
//         <>
//             <p>{selector.length}</p>
//             <button onClick={addToCartHandler}>add to cart</button>
//         </>
//     );
// }

// export default CartItemComponent;
