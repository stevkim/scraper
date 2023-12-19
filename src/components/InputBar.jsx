import { useState } from 'react';
import { updateSession } from '../lib/fetchFunctions.js';

const InputBar = () => {
  const [url, setUrl] = useState('');

  const handleClick = () => {
    const path = new URL(url).pathname.slice(1);
    updateSession({ name: path, url: url });
  }

  return (
    <div>
      <input type='text' placeholder='backcountry.com/example-product' required onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleClick}>Go</button>
    </div>
  )
}

export default InputBar;