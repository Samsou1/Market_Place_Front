import { Link } from 'react-router-dom'
import videoBg from '../../videos/videoBg.mp4'

const Hero = () => {
  return (
    // autoPlay loop (Add it later before muted)
    <>
      <video src={videoBg} muted id="hero-video"></video>
      <div className="hero-text-container">
        <h1>Bienvenue chez ImmoCorps</h1>
        <p>Se lancer dans l'immobilier, peut être donné à tout le monde</p>
        <Link to='/register' >Register</Link>
      </div>
    </>
    
  )
}

export default Hero


