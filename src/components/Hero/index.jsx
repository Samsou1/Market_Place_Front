import { Link } from 'react-router-dom'
import videoBg from '../../../public/videoBg.mp4'

const Hero = () => {
  return (
    // autoPlay loop (Add it later before muted)
    <>
      <video src={videoBg} muted id="hero-video"></video>
      <div className="hero-text-container">
        <h1 className="hero-title">Bienvenue chez ImmoCorps</h1>
        <br></br>
        <p>Se lancer dans l'immobilier, peut être donné à tout le monde</p>
        <br></br>
        <Link  className="link" to='/register' >Register</Link>
      </div>
    </>
    
  )
}

export default Hero


