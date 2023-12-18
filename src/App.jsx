import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [urlList, setUrlList] = useState([]);

  return (
    <>
      <Home list={urlList} />
    </>
  )
}

export default App
