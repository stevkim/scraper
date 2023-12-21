import { useSelector } from 'react-redux';

const CurrentCard = () => {
  const product = useSelector(state => state.session.productInfo);

  return (
    <div className='product-card'>
        <img className='product-image' src={product.imgUrl} alt={product.name} width='400' height='400' />
        <div className='product-info flex-col'>
          <h2 className='product-title'>{product.productName}</h2>
          <a className='product-link' target='_blank' rel="noreferrer" href={product.url}>
            Link to Product
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <h4>
            Today&apos;s Price: {product.price}
            {product.sale &&
              <sup className='product-sale'>{product.sale}</sup>}
          </h4>

          <h4>Available Sizes Today (EU): </h4>
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