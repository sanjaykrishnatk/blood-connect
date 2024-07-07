import React from 'react'
import './Registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faPhone, faFlag,faLocationDot,faDroplet } from '@fortawesome/free-solid-svg-icons'
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
                <div className='input-box'>
                <input type="text"  placeholder="Select Blood Group"  />
                <FontAwesomeIcon className="icons" icon={faDroplet} />
                
                <select className='input-box'>
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
               

                <div className='input-box'>
                <input  type="text"   placeholder="Enter District" />
                <FontAwesomeIcon className="icons" icon={faLocationDot} />
               </div>

               <div className='input-box'>
                <input  type="text"   placeholder="Enter State" />
                <FontAwesomeIcon className="icons" icon={faFlag} />
                </div>
                
                <div className='input-box'>
                <input type="tel"   placeholder="Enter Phone Number..." />
                <FontAwesomeIcon className="icons" icon={faPhone} />
               </div>

                <button type="submit">Register</button>

                <div className="remember-forget">
                    <label><input type="checkbox" />I agree to all terms & conditions.</label>
                    <a href="#">Forget Password?</a>
                </div>
                <div className="register-link">
                    <p>Already have an account? <Link style={{color:'blueviolet'}} to="/login">Login</Link></p>
                </div>
        </form>
      </div>


     
    </div>
    </div> 
  )
}

export default Registration