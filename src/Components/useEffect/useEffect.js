import React, { useState, useEffect } from "react";

function UseEffect() {
  const [Counte, setCount] = useState(0);
  const [HideComponent, setHideComponent] = useState(false);

  const showDetails = function (e) {
    setCount(e);
  };

  useEffect(() => {
    window.addEventListener("mousemove", showDetails);
    return () => {
      window.removeEventListener("mousemove", showDetails);
      console.log("component removed");
    };
  }, []);

  return (
    <div>
      {HideComponent == true ? <p>{Counte.pageX}</p> : null}
      <button type="button" onClick={() => setHideComponent(!HideComponent)}>
        Click
      </button>
    </div>
  );
}

export default UseEffect;
