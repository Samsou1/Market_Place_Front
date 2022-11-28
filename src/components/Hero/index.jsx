import { Link } from 'react-router-dom'
import videoBg from '../../../public/videoBg.mp4'

const Hero = () => {
  return (
    <div className="hero-video">
      <video src={videoBg} autoPlay loop muted></video>
      <div className="hero-text">
        <h1 className="hero-title">Bienvenue chez Immocops</h1>
        <br></br>
        <p>Se lancer dans l'immobilier, peut être donné à tout le monde</p>
        <br></br>
        <Link  className="link" to='/register' >Incrivez-vous</Link>
      </div>
    </div>
    
  )
}

export default Hero