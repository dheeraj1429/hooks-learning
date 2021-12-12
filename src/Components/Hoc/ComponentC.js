import React, { useState } from 'react';
import HOC from './HOC';

const num = 10;

function ComponentC(props) {
  console.log(props);
  return (
    <div>
      <button type="button" onClick={() => props.onclick()}>
        CLick One {props.value}
      </button>
    </div>
  );
}

export default HOC(ComponentC, num);
