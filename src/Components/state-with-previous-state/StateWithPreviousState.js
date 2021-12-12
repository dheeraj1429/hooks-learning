import React, { useState } from "react";

function StateWithPreviousState() {
  const [Count, setCount] = useState(0);

  const changeCountState = function () {
    for (let i = 0; i < 3; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={changeCountState}>
        {Count}
      </button>
    </div>
  );
}

export default StateWithPreviousState;
