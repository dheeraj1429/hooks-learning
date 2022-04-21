import React from "react";
import { connect } from "react-redux";
import { setInc, secondInc } from "../../Redux/Action/action";
import { numSelector, secondNumberFun } from "./IncComponet.selectore";
import { createStructuredSelector } from "reselect";

const IncComponent = function ({ num, seoncdNum, updateData, updateSecondFn }) {
    console.log("inc component render");
    const ChangeHandler = function () {
        updateData();
    };

    const ChangeHandlerSecond = function () {
        updateSecondFn();
    };

    return (
        <>
            <h1>{num}</h1>
            <h2>{seoncdNum}</h2>
            <button onClick={ChangeHandler}>inc</button>
            <button onClick={ChangeHandlerSecond}>change 2</button>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateData: function () {
        dispatch(setInc(1));
    },
    updateSecondFn: function () {
        dispatch(secondInc(5));
    },
});

const mapStateToProps = createStructuredSelector({
    num: numSelector,
    seoncdNum: secondNumberFun,
});

export default connect(mapStateToProps, mapDispatchToProps)(IncComponent);

// import React from "react";
// import { setInc, secondInc } from "../../Redux/Action/action";
// import { useDispatch, useSelector } from "react-redux";

// const IncComponent = function () {
//     console.log("inc component rerender");

//     const dispatch = useDispatch();
//     const num = useSelector((state) => state.userStoreData.num);
//     const secondNum = useSelector((state) => state.userStoreData.dataTwo);

//     const ChangeHandler = function () {
//         dispatch(setInc(1));
//     };

//     const ChangeHandlerSecond = function () {
//         dispatch(secondInc(20));
//     };

//     return (
//         <>
//             <h1>{num}</h1>
//             <h2>{secondNum}</h2>
//             <button onClick={ChangeHandler}>inc</button>
//             <button onClick={ChangeHandlerSecond}>change 2</button>
//         </>
//     );
// };

// export default IncComponent;
