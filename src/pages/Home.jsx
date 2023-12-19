import ProductList from '../components/ProductList';
import InputBar from '../components/InputBar';

const Home = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        Track items from <a target='_blank' rel='noreferrer' href='https://www.backcountry.com/'>Backcountry.com</a> to compare price changes over time!
      </div>
      <InputBar />
      <ProductList />
    </div>
  )
}

export default Home;