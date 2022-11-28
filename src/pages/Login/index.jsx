import { useState } from 'react'
import APIManager from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: email,
        password: password
      },
    };
    try {
      await APIManager.loginUser(data);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="title-form">Login</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <div className='input-container'>
          <label bel htmlFor="username">Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
            />
        </div>
        <div className='input-container'>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            id="password"
            placeholder="Password"
          />
        </div>
        <button className="btn-signup">Sign Up</button>
        <div>
          <p>Don't have an account?</p>
          <Link className="link" to='/register' >Register</Link>
        </div>
        <div>
          <p>Don't remember your password?</p>
          <Link className="link" to='/resetpassword' >Click here</Link>
        </div>
      </form>
    </>
  );
}


export default Login