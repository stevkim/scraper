import { createTitle } from '../lib/utilityFunctions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../features/sessionSlice.js';
import { Link } from 'react-router-dom';
import './components.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.session.urlList);

  return (
    <section className='track-list-wrapper'>
      <h1>Currently Tracking</h1>
      <div className='track-list'>
      {list.length > 0
        ? list.map(link => {
            return <Link key={link.name} className='list-item' onClick={() => dispatch(setActive(link))} to={link.name}>{createTitle(link.name)}</Link>
          })
        : <div className='fallback-message'>Add a url to start tracking</div>
      }
      </div>
    </section>
  )
}

export default ProductList;