import React from 'react'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';





const Login = () => {
  return (
    <div className='container-fluid'>
    <div className='wrapper'>
      <div className='form-box login'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' />
                <FontAwesomeIcon className="icons"icon={faUser} />
                </div>
                <div className="input-box">
                <input type="password" placeholder='Password' />
                <FontAwesomeIcon  className="icons"icon={faLock} />
                </div>
                <div className='input-box'>
                <input type="text"  placeholder="Select Blood Group"  />
                
                <select>
    <option>A +ve</option>
    <option>A -ve</option>
    <option>B +ve</option>
    <option>B -ve</option>
    <option>AB +ve</option>
    <option>AB -ve</option>
    <option>O +ve</option>
    <option>O -ve</option>
</select>
                </div>
                <div>
                <input  type="text"   placeholder="Enter District" />
              
                </div>
                <div>
                <input  type="text"   placeholder="Enter State" />
               
                </div>
                <div>
                <input type="tel"   placeholder="Enter Phone Number..." />
            
                </div>
               
        
                
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forget Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
        </form>
      </div>


     
    </div>
    </div>
  )
}

export default Login