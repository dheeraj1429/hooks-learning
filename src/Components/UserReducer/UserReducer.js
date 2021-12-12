import React, { useReducer } from 'react';

const initalState = 0;
const reducer = (state = initalState, action) => {
     if (action.type == 'INC') {
          return state + action.payload;
     }
     if (action == 'DEC') {
          return state - 1;
     }
     if (action == 'RESET') {
          return (state = initalState);
     }
};

function UserReducer() {
     const [count, dispatch] = useReducer(reducer, initalState);
     return (
          <div>
               <p>{count}</p>
               <button type="button" onClick={() => dispatch({ type: 'INC', payload: 20 })}>
                    Inc
               </button>
               <button type="button" onClick={() => dispatch('DEC')}>
                    Dec
               </button>
               <button type="button" onClick={() => dispatch('RESET')}>
                    Reset
               </button>
          </div>
     );
}

export default UserReducer;
