import { useState } from 'react';
import { updateSession, addProduct, getSession } from '../lib/fetchFunctions.js';
import { useDispatch } from 'react-redux';
import { updateUrlList } from '../features/sessionSlice.js';
import './components.css';

const InputBar = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const handleClick = () => {
    if (!url.includes('backcountry.com')) return;
    const path = new URL(url).pathname.slice(1);
    addProduct({ name: path, url: url });
    updateSession({ name: path, url: url })
      .then(() => {
        getSession()
          .then(({ data }) => {
            dispatch(updateUrlList(data.urls));
          })
      })
      .finally(() => {
        setUrl('');
      })
  };

  return (
    <div className='input-section'>
      <p>Insert the URL of any product page to start tracking!</p>
      <div className='input-wrapper'>
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