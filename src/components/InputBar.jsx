import { useState } from 'react';
import { addProduct, getSession } from '../lib/fetchFunctions.js';
import { checkUrl } from '../lib/utilityFunctions.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateUrlList } from '../features/sessionSlice.js';
import './components.css';

const InputBar = () => {
  const dispatch = useDispatch();
  const urlList = useSelector(state => state.session.urlList);
  const [url, setUrl] = useState('');

  const handleClick = () => {
    if (!checkUrl(url, urlList)) return;
    const path = new URL(url).pathname.slice(1);
    addProduct({ name: path, url: url })
      .then(() => {
        getSession()
          .then(({ data }) => {
            dispatch(updateUrlList(data.urls));
          })
      })
    setUrl('');
  };

  return (
    <div className='input-section flex-col'>
      <p>Insert the URL of any product page to start tracking!</p>
      <div className='input-wrapper flex-row'>
        <input
          className='url-input'
          type='text'
          placeholder='backcountry.com/example-product'
          required
          onChange={(e) => setUrl(e.target.value)}
          />
        <button onClick={handleClick}>Go</button>
      </div>
    </div>
  )
}

export default InputBar;