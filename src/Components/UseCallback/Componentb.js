import React from "react";

function Componentb({ onclick }) {
  console.log("Component B render");
  return (
    <div>
      <button type="button" onClick={() => alert()}>
        two
      </button>
    </div>
  );
}

export default Componentb;
