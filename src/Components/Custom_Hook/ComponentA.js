import React, { useState, useEffect } from 'react';

import useFetch from './useFetch-Effect';

function ComponentA() {
  const Data = useFetch(`https://jsonplaceholder.typicode.com/posts`);

  return <>{Data.title}</>;
}

export default ComponentA;
