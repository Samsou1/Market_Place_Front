import { Link } from 'react-router-dom'
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
      <div>
        <Link to='/' ><img src={logo_immo} alt="logo"></img></Link>
        <Link to='/' ><h1 className='company'>ImmoCorps</h1></Link>
      </div>
      <nav>
      {(toggleMenu || largeur > 768) && (
        <ul className='list'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/myapartments'>Apartments</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><LogoutButton /></li>
        </ul>
      )}
       <button onClick={toggleNav} className="toggle-button">MENU</button>
      </nav>
    </header>
  )
}
export default Navbar