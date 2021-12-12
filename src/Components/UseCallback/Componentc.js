import React from "react";

function Componentc({ onclick }) {
  console.log("Component C render");

  return (
    <div>
      <button type="button" onClick={() => alert()}>
        three
      </button>
    </div>
  );
}

export default Componentc;
