import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

function NestedRouterComponent() {
    return (
        <div>
            <Link to={`collection`}>
                <p>page</p>
            </Link>
        </div>
    );
}

export default NestedRouterComponent;
