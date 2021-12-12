import React, { useState, useEffect } from "react";

const UseEffectTow = function () {
  const [Counte, setCounte] = useState(0);

  const tink = () => {
    setCounte((prevState) => prevState + 1);
  };

  useEffect(() => {
    const interval = setInterval(tink, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [Counte]);

  return (
    <div>
      <p>{Counte}</p>
    </div>
  );
};

export default UseEffectTow;
