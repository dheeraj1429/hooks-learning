import React from 'react';
import useFetch from './useFetch-Effect';

function ComponentB() {
  const Data = useFetch(`https://jsonplaceholder.typicode.com/photos`);

  return <div>{Data.thumbnailUrl}</div>;
}

export default ComponentB;
