import './Registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faPhone, faFlag, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [blood, setBlood] = useState('');
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

  const validateMobile = (mobile) => {
    return mobile.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (name.trim() === '') {
      setError('Name is required');
      return;
    }
    if (!validateMobile(mobile)) {
      setError('Mobile number must be 10 digits');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (district.trim() === '') {
      setError('District is required');
      return;
    }

    if (state.trim() === '') {
      setError('State is required');
      return;
    }

    if (blood === '') {
      setError('Blood Group not selected');
      return;
    }

    

    setIsLoading(true);
    setTimeout(() => {
      console.log('User Registered:', { name, mobile, password, district, state, blood, selectedOption });
      toast.success('Registration successful!');
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='container-fluid'>
      <div className='wrapper'>
        <div className='form-box login'>
          {error && <p className="error text-center">{error}</p>}
          <form action="" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input className="p-2" type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faUser} />
            </div>

            <div className="input-box">
              <input className="p-2" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}  required />
              <FontAwesomeIcon className="icons" icon={faLock} />
            </div>
            <div className="input-box">
              <input className="p-2" type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faLock} />
            </div>

            <div className="input-box">
              <select name="Select Blood Group" id="blood" className="p-2" onChange={(e) => setBlood(e.target.value)} required>
                <option id='val' value="" disabled selected>Choose blood group</option>
                <option id='val' value="A+ve">A+ve</option>
                <option id='val' value="A-ve">A-ve</option>
                <option id='val' value="B+ve">B+ve</option>
                <option id='val' value="B-ve">B-ve</option>
                <option id='val' value="AB+ve">AB+ve</option>
                <option id='val' value="AB-ve">AB-ve</option>
                <option id='val' value="O+ve">O+ve</option>
                <option id='val' value="O-ve">O-ve</option>
              </select>
            </div>

            <div className='input-box'>
              <input className="p-2" type="text" placeholder="Enter District" onChange={(e) => setDistrict(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faLocationDot} />
            </div>

            <div className='input-box'>
              <input className="p-2" type="text" placeholder="Enter State" onChange={(e) => setState(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faFlag} />
            </div>

            <div className='input-box'>
              <input className="p-2" type="tel" placeholder="Enter Phone Number" onChange={(e) => setMobile(e.target.value)} required />
              <FontAwesomeIcon className="icons" icon={faPhone} />
            </div>

            <div>
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

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>

            <div className="remember-forget mt-4">
              <label><input type="checkbox" />I agree to all terms & conditions.</label>
              <a href="#" style={{ color: 'blue' }}>Forget Password?</a>
            </div>
            <div className="register-link">
              <p>Already have an account? <Link style={{ color: 'blue' }} to="/Login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;