import { useState, useEffect } from 'react';
import logo_immo from '../../../src/images/logo.png';
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
        
      <Link className="link" to='/' ><img src={logo_immo} alt="logo"></img></Link>
      <Link className="link" to='/' ><h1 className='company'>ImmoCorps</h1></Link>
      <nav>
      {(toggleMenu ||largeur > 500) && (
        <ul className='list'>
          <li><Link className="link" to='/' >Home</Link></li>
          <li><Link className="link" to='/about' >About</Link></li>
          <li><Link className="link" to='/login' >Login</Link></li>
          <li><Link className="link" to='/register' >Register</Link></li>
          <li><Link className="link" to='/myapartments' >My apartments</Link></li>
          {/* <li><LogoutButton/></li> */}
        </ul>
      )}
       <button onClick={toggleNav} className="btn">☰</button>
      </nav>
    </header>
  )
}
export default Navbar