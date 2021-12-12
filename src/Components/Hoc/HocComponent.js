import React, { useState } from 'react';

const HOC = function (Component, num) {
  function HocComponent() {
    const [Count, setCount] = useState(0);
    const changeHandle = function () {
      setCount(Count + num);
    };

    return <Component value={Count} onclik={changeHandle} />;
  }

  return HocComponent;
};

export default HOC;
