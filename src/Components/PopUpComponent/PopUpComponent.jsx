import React from "react";
import * as PopUp from "./PopUpComponent.style";
import { connect } from "react-redux";

function PopUpComponent({ showPopUp }) {
    return <>{!showPopUp ? <PopUp.div>PopUpComponent</PopUp.div> : null}</>;
}

const mapStateToProps = (state) => ({
    showPopUp: state.userStoreData.showPopUp,
});

export default connect(mapStateToProps)(PopUpComponent);
