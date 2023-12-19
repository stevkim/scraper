import placeholder from '../assets/image-placeholder.jpg';
import './components.css';

const ProductSkeleton = () => {
  return (
    <>
      <div className='product-card' style={{ marginTop: '100px' }}>
          <h1>Loading...</h1>
          <img className='product-image' src={placeholder} alt='placeholder image' width='400' height='400' />
          <div className='product-info'>
            <h1 className='product-title'></h1>
            <h4>
              Current Price/Range:
            </h4>

            <h4>Current available sizes (EU): </h4>
            <div className='size-grid'>
              <div className='size-box'></div>
              <div className='size-box'></div>
              <div className='size-box'></div>
              <div className='size-box'></div>
              <div className='size-box'></div>
            </div>
          </div>
      </div>
      <table className='history-table'>
        <h2>Price History</h2>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Price</th>
          <th>Sale</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  )
}

export default ProductSkeleton;