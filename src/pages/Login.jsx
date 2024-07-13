import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleAlert = () => {
    if (selectedOption === '') {
      setError('Please select an option!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Perform basic validation
    if (username.trim() === '') {
      setError('Username or Email is required');
      return;
    }

    if (password === '') {
      setError('Password is required');
      return;
    }
   

    setIsLoading(true);

    // Mock login process
    setTimeout(() => {
      // Simulate successful login
      if (username === 'test@example.com' && password === 'password123') {
        toast.success('Login successful!');
        navigate('/home');
      } else {
        setError('Invalid username/email or password');
      }
      setIsLoading(false);
    }, 1000);
  };



  return (
    <div className="container-fluid login-wrapper">
      <div className="wrapper">
        <div className='form-box login'>
          {error && <p className="error text-center">{error}</p>}
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box ">
              <input type="text" className='p-4' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faUser} />
            </div>
            <div className="input-box">
              <input className='p-4' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faLock} />
            </div>


            <div >

            <h5 style={{ fontSize: '15px' }}>Choose your Role:</h5>
              <label id="label1">
                <input type="radio" name="role" value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                  onClick={handleAlert}  required/>
                Donor
              </label>
              <label id="label2">
                <input type="radio" name="role" value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                  onClick={handleAlert} required />
                Recipient
              </label><br />


            </div>
            <div className="remember-forget">
              <label><input type="checkbox" />Remember Me</label>
              <a href="#" style={{ color: 'blue' }}>Forget Password?</a>
            </div>
            <button type="submit" disabled={isLoading} >
              {isLoading ? 'Logging in...' : 'Login'}</button>
            <div className="register-link">
              <p>Don't have an account? <Link style={{ color: 'blue' }} to="/Registration">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
