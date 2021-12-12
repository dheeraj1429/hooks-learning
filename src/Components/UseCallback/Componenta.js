import React, { useState } from "react";

function Componenta() {
  console.log("Component A render");
  return (
    <div>
      <button type="button" onClick={() => alert()}>
        One
      </button>
    </div>
  );
}

export default Componenta;
