import React, { useState } from 'react';
import '../Allstyles/Auth.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add sign-in logic here
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Sign In</h2>
            <form onSubmit={handleSignIn} className="auth-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
