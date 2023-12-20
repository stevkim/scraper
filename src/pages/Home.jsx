import ProductList from '../components/ProductList';
import InputBar from '../components/InputBar';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className='page-wrapper'>
      <CallToAction />
      <InputBar />
      <ProductList />
    </div>
  )
}

export default Home;