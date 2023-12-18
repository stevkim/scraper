import { useEffect, useState } from 'react';
import { getData, getHistory, addHistory } from '../lib/fetchFunctions.js';

const ProductInfo = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState();
  const [history, setHistory] = useState([]);


  useEffect(() => {
    if (!data) return;
    async function fetchData() {
      const [result, stored] = await Promise.all([getData(data), getHistory(data)]);
      setCurrent(await result.data);
      setHistory(await stored.data);
      setIsLoading(false);

      addHistory(await result.data);
    }
    fetchData();

    return () => setIsLoading(true);
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      Product Testing
    </div>
  )
}

export default ProductInfo;