
import React from 'react';

const RegistrationForm = () => {
    return (
        <form className="registration-form">
            <h2>Register</h2>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input type="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
