import React, { useState } from 'react';
import HOC from './HocComponent';

const num = 10;

function ComponentA(props) {
  return (
    <div>
      <button type="button" onClick={props.onclik}>
        {props.value}
      </button>
    </div>
  );
}

export default HOC(ComponentA, num);
