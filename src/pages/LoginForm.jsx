
import React from 'react';

const LoginForm = () => {
    return (
        <form className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
