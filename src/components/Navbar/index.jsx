import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { userAtom } from '../../store/user';
import LogoutButton from '../LogoutButton';

const Navbar = () => {
  return(
    <header>
        <img src="../../../public/logo.png" alt="logo"></img>
        <nav>
          <ul>
            <li><Link className="link" to='/' >Home</Link></li>
            <li><Link className="link" to='/about' >About</Link></li>
            <li><Link className="link" to='/login' >Log in</Link></li>
            <li><Link className="link" to='/register' >Register</Link></li>
            <li><LogoutButton/></li>
          </ul>
        </nav>
    </header>
  )
}
export default Navbar