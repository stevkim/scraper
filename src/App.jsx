import { useEffect } from 'react';
import { getSession } from './lib/fetchFunctions.js';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUrlList } from './features/sessionSlice.js';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getSession()
      .then(({ data }) => {
        dispatch(updateUrlList(data.urls));
      })
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
