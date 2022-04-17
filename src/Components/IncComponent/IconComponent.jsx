import React from "react";
import { connect } from "react-redux";
import { setInc, secondInc } from "../../Redux/Action/action";
import { numSelector, secondNumberFun } from "./IncComponet.selectore";
import { createStructuredSelector } from "reselect";

const IncComponent = function ({ num, seoncdNum, updateData, updateSecondFn }) {
    console.log("inc component rerender");

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

const mapStateToProps = function () {
    console.log("inc component render");

    return createStructuredSelector({
        num: numSelector,
        seoncdNum: secondNumberFun,
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(IncComponent);
