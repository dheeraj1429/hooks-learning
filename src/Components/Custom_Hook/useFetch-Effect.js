import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const res = async function () {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data[0]));
    };

    res();
  }, [url]);

  return Data;
};

export default useFetch;
