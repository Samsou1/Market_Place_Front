import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Welcome to CleanSea</h1>
        <p>Our goal is to clean up any beach that needs cleaning</p>
        <Link className="link" to='/register' >Register for free</Link>
      </div>
    </div>
  )
}

export default Hero