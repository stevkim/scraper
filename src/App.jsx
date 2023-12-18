import { useState } from 'react';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';

const temp = [
  {
    name: "Instinct VS Climbing Shoe - Women's",
    url: 'https://www.backcountry.com/scarpa-instinct-vs-climbing-shoe'
  },
  {
    name: "Futura Climbing Shoe - Women's",
    url: 'https://www.backcountry.com/la-sportiva-futura-climbing-shoe-women'
  }
]

function App() {
  const [urlList, setUrlList] = useState(temp);
  const [active, setActive] = useState();

  const handleClick = (data) => {
    setActive(data);
  }

  return (
    <>
      <Home list={urlList} handleClick={handleClick}/>
      <ProductInfo data={active} />
    </>
  )
}

export default App
