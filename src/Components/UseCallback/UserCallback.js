import React, { useState, useMemo } from "react";

// import Componenta from "./Componenta";
// import Componentb from "./Componentb";
// import Componentc from "./Componentc";

function UserCallback() {
  const [Count, setCount] = useState(0);
  const [Count1, setCount1] = useState(0);

  const useMemoFunc = useMemo(
    function multiFuun() {
      console.log("rener function");
      return Count * 20;
    },
    [Count]
  );

  return (
    <div>
      <p>{useMemoFunc}</p>

      <p>{Count}</p>
      <p>{Count1}</p>
      <button type="button" onClick={() => setCount(Count + 1)}>
        Click
      </button>

      <button type="button" onClick={() => setCount1(Count1 + 50)}>
        Click2
      </button>
    </div>
  );
}

export default UserCallback;
