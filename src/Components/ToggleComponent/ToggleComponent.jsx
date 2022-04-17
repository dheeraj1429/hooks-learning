import React from "react";
import { ShowAndHidePopUp } from "../../Redux/Action/action";
import { connect } from "react-redux";

function ToggleComponent({ showPopUp, PopUpHandler }) {
    return <button onClick={() => PopUpHandler(!showPopUp)}>toggle</button>;
}

const mapDispatchToProps = (dispatch) => ({
    PopUpHandler: function (data) {
        dispatch(ShowAndHidePopUp(data));
    },
});

const mapStateToProps = (state) => ({
    showPopUp: state.userStoreData.showPopUp,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleComponent);
