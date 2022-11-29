import { useState } from 'react'
import APIManager from "../../services/api"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpd, setConfirmPd] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user: {
                email: email,
                password: password
            }
        }
        if (password === confirmpd) {
        try {
            await APIManager.registerUser(data);
            navigate('/');
        } catch (err) {
            console.error(err)
        }
    } else { 
            return  <div> Password do not match </div>
    }
    }
    return (
        <>
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleSubmit} className="register-form-container">
                <div className='input-container'>
                    <label htmlFor="email">Email </label>
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
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        onChange={(e) => setConfirmPd(e.target.value)}
                        value={confirmpd}
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <button>Sign Up</button>
                <p>Already have an account? <span><Link className="link" to='/login' >Log in</Link></span></p>
            </form>
        </>
    )
}
export default Register