import { Link } from 'react-router-dom';
import logo_immo from '../../../src/images/logo.png';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../store/user';
import LogoutButton from '../LogoutButton';

const Navbar = () => {
  return(
    <header>
      <Link className="link" to='/' ><img src={logo_immo} alt="logo"></img></Link>
      <Link className="link" to='/' ><h1 className='company'>ImmoCorps</h1></Link>
      <nav>
        <ul>
          <li><Link className="link" to='/' >Home</Link></li>
          <li><Link className="link" to='/about' >About</Link></li>
          <li><Link className="link" to='/login' >Log in</Link></li>
          <li><Link className="link" to='/register' >Register</Link></li>
          <li><Link className="link" to='/apartments' >My Announcements</Link></li>
          {/* <li><LogoutButton/></li> */}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar