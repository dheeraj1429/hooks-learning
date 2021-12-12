import React, { useContext } from "react";

import { context } from "./UserReducerWithContextApi";

function ComponentB() {
  const data = useContext(context);

  return (
    <div>
      <p>{data.Count}</p>
      <button type="button" onClick={() => data.dispatch("INC")}>
        Inc
      </button>
    </div>
  );
}

export default ComponentB;
