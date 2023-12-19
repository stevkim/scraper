import { createTitle } from '../lib/utilityFunctions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../features/sessionSlice.js';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.session.urlList);

  return (
    <div>
      <h1>Currently Tracking: </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {list.length > 0
        ? list.map(link => {
            return <Link key={link.name} onClick={() => dispatch(setActive(link))} to={link.name}>{createTitle(link.name)}</Link>
          })
        : <div>Add a url to start tracking</div>
      }
      </div>
    </div>
  )
}

export default ProductList;