import { Link } from 'react-router-dom';
import './components.css';

const Navbar = ()  => (
  <div className='navbar flex-row'>
    <Link to='/'>WebCountry</Link>
  </div>
)


export default Navbar;