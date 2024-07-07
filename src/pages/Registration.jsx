import React from 'react'
import './registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const Registration = () => {
  return (
    <div className='container-fluid'>
    <div className='wrapper'>
      <div className='form-box login'>
        <form action="">
            <h1>Registration</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' />
                <FontAwesomeIcon className="icons"icon={faUser} />
                </div>
                <div className="input-box">
                <input type="password" placeholder='Password' />
                <FontAwesomeIcon  className="icons"icon={faLock} />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />I agree to all terms & conditions.</label>
                    <a href="#">Forget Password?</a>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
        </form>
      </div>


     
    </div>
    </div> 
  )
}

export default Registration