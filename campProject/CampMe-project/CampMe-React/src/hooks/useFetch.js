import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => setData(resJson));
  }, [url]);

  return data;
}

export default useFetch;
