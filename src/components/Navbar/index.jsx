import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
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
        <Link className="img-nav" to='/' ><img src="../../../public/logo.png" alt="logo"></img></Link>
      <nav>
      {(toggleMenu ||largeur > 500) && (
        <ul className='list'>
          <li><Link className="link" to='/' >Home</Link></li>
          <li><Link className="link" to='/about' >About</Link></li>
          <li><Link className="link" to='/login' >Login</Link></li>
          <li><Link className="link" to='/register' >Register</Link></li>
          {/* <li><LogoutButton/></li> */}
        </ul>
      )}
       <button onClick={toggleNav} className="btn">☰</button>
      </nav>
    </header>
  )
}
export default Navbar