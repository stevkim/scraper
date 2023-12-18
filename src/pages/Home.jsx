import ProductList from '../components/ProductList';

const Home = ({ list, handleClick }) => {
  return (
    <div>
      Testing
      <ProductList list={list} handleClick={handleClick} />
    </div>
  )
}

export default Home;