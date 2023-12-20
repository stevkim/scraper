import { useEffect, useState } from 'react';
import { getData, getHistory } from '../lib/fetchFunctions.js';
import CurrentCard from '../components/CurrentCard';
import { setProductInfo, setProductHistory } from '../features/sessionSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import HistoryList from '../components/HistoryList';
import ProductSkeleton from '../components/ProductSkeleton';

const ProductInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.session.activeProduct);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data) return;
    async function fetchData() {
      const [result, stored] = await Promise.all([getData(data), getHistory(data)]);
      dispatch(setProductInfo(await result.data));
      dispatch(setProductHistory(await stored.data));
      setIsLoading(false);
    }
    fetchData();

    return () => setIsLoading(true);
  }, [data, dispatch])

  if (isLoading) {
    return <ProductSkeleton />
  }

  return (
    <div className='page-wrapper'>
      <CurrentCard />
      <HistoryList />
    </div>
  )
}

export default ProductInfo;