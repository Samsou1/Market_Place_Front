import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { userAtom } from '../../store/user';
import LogoutButton from '../LogoutButton';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState(window.innerWidth);

const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(()=> {

  const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
window.addEventListener("resize", changeWidth);


  return () => {
    window.removeEventListener("resize", changeWidth);
  }
}, [])
  return(
    <header>
      <Link className="link" to='/' ><img src="../../../public/logo.png" alt="logo"></img></Link>
      <nav>
        <ul>
          <li><Link className="link" to='/' >Home</Link></li>
          <li><Link className="link" to='/about' >About</Link></li>
          <li><Link className="link" to='/login' >Log in</Link></li>
          <li><Link className="link" to='/register' >Register</Link></li>
          {/* <li><LogoutButton/></li> */}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar