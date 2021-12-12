import React, { useContext, useReducer } from "react";

import ComponentB from "./ComponentB";

const initalState = 0;

const reducer = function (state = initalState, action) {
  switch (action) {
    case "INC":
      return state + 1;
  }
};

export const context = React.createContext();

function UserReducerWithContextApi() {
  const [Count, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <context.Provider
        value={{
          Count,
          dispatch,
        }}
      >
        <ComponentB />
      </context.Provider>
    </div>
  );
}

export default UserReducerWithContextApi;
