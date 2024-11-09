import React, { useState } from 'react';
import '../Allstyles/Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Add register logic here
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Register</h2>
            <form onSubmit={handleRegister} className="auth-form">
            <div className="form-group">
                    <label>Username</label>
                    <input
                        type="username"
                        value={Text}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
