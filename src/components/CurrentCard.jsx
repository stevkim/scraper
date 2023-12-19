import { useSelector } from 'react-redux';

const CurrentCard = () => {
  const product = useSelector(state => state.session.productInfo);

  return (
    <div className='product-card'>
        <img className='product-image' src={product.imgUrl} alt={product.name} width='400' height='400' />
        <div className='product-info'>
          <h1 className='product-title'>{product.productName}</h1>
          <h4>
            Current Price/Range: {product.price}
            {product.sale &&
              <span className='product-sale'>{product.sale}</span>}
          </h4>

          <h4>Current available sizes (EU): </h4>
          <div className='size-grid'>
            {
              product.sizes.map(size => {
                return (
                  <div key={size} className='size-box'>{size}</div>
                )
              })
            }
          </div>
        </div>
    </div>
  );
}

export default CurrentCard;