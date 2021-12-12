import React, { useContext } from "react";
import { UserContext } from "../../App";

function ContextApi() {
  const user = useContext(UserContext);

  return <div>{user}</div>;
}

export default ContextApi;
