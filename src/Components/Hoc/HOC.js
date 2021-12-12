import React, { useState } from 'react';

const HOC = function (Component, data) {
  const HocFunction = function () {
    const [Num, setNum] = useState(0);

    const changeStateValue = function () {
      setNum(Num + data);
    };

    return <Component value={Num} onclick={changeStateValue} />;
  };

  return HocFunction;
};

export default HOC;
