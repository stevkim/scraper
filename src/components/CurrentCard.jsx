import { useSelector } from 'react-redux';

const CurrentCard = () => {
  const product = useSelector(state => state.session.productInfo);

  return (
    <div>
      <h1>{product.productName}</h1>
      <img src={product.imgUrl} alt={product.name} width='400' height='400' />

      <p>
        Current Price/Range: {product.price}
        {product.sale &&
          <span>{product.sale}</span>}
      </p>
      <p>Current available sizes (EU): </p>
      {
        product.sizes.map(size => {
          return (
            <div key={size}>{size}</div>
          )
        })
      }
    </div>
  );
}

export default CurrentCard;