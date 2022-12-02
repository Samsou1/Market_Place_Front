import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import videoBg from "../../videos/videoBg.mp4";

const Hero = () => {
if (Cookies.get('currentUser')) {
  return (
    // autoPlay loop (Add it later before muted)
    <section className="hero-container">
      <video src={videoBg} autoPlay muted loop></video>
      <div>
        <h1>Welcome to ImmoCorps</h1>
        <p>Get into real estate, can be given to everyone!</p>
        <Link to="/myapartments">My Apartments</Link>
      </div>
    </section>
    );
  } else {
    return (
      // autoPlay loop (Add it later before muted)
      <section className="hero-container">
        <video src={videoBg} muted></video>
        <div>
          <h1>Welcome to ImmoCorps</h1>
          <p>Get into real estate, can be given to everyone!</p>
          <Link to="/register">Register</Link>
        </div>
      </section>
    );
  };
}

export default Hero;
