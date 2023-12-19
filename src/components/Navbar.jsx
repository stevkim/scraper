import { Link } from 'react-router-dom';
import './components.css';

const Navbar = ()  => {
  return (
    <div className='navbar'>
      <Link to='/'>WebCountry</Link>
    </div>
  )
}

export default Navbar;