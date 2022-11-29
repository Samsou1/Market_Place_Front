import { Link } from 'react-router-dom'
import videoBg from '../../videos/videoBg.mp4'

const Hero = () => {
  return (
    // autoPlay loop (Add it later before muted)
    <section className='hero-container'>
      <video src={videoBg} muted></video>
      <div>
        <h1>Bienvenue chez ImmoCorps</h1>
        <p>Se lancer dans l'immobilier, peut être donné à tout le monde</p>
        <Link to='/register' >Register</Link>
      </div>
    </section>
  )
}

export default Hero