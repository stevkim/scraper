import placeholder from '../assets/image-placeholder.jpg';
import './components.css';

const ProductSkeleton = () => {
  return (
    <section style={{ width: '90%', margin: '0 auto' }}>
      <div className='product-card' style={{ marginTop: '100px' }}>
          <img className='product-image' src={placeholder} alt='placeholder image' width='400' height='400' />
          <div className='product-info'>
            <h1 className='product-title'>Loading...</h1>
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
      <div className='table-title'>
        <h2>Price History</h2>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      </div>
      <table className='history-table'>
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
    </section>
  )
}

export default ProductSkeleton;