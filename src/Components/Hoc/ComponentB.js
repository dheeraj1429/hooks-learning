import React from 'react';
import HOC from './HocComponent';

const num = 20;

function ComponentB(props) {
     return (
          <div>
               <button type="button" onClick={props.onclik}>
                    {props.value}
               </button>
          </div>
     );
}

export default HOC(ComponentB, num);
