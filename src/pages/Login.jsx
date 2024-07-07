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
                
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forget Password?</a>style={{color:'blueviolet'}}
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link style={{color:'blueviolet'}} to="/register">Register</Link></p>
                </div>
        </form>
      </div>


     
    </div>
    </div>
  )
}

export default Login