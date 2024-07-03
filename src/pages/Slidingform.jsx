
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './stylelog.css'


const SlidingForm = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };

    return (
        <div className="sliding-form-container">
            <div className={`form-container ${isLoginFormVisible ? 'login' : 'register'}`}>
                {isLoginFormVisible ? <LoginForm /> : <RegistrationForm />}
            </div>
            <button className="toggle-button" onClick={toggleForm}>
                {isLoginFormVisible ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default SlidingForm;
