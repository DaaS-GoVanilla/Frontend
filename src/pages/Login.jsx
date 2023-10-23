import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { username, password });
            if (response.status === 200) {
                // Redirect to another page upon successful login
                // history.push('/dashboard');
                navigate('/dashboard')
                console.log(response)
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='login-container'>
            <div className="login">
                <div className="top">
                    <div className="logo">
                        <img src="/src/assets/logo.png" alt="" />
                    </div>
                    <div className="name">
                        <p>loansondemand.io</p>
                    </div>
                </div>

                <div className="wrapper">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i className='bx bxs-user'></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn">
                            Submit
                        </button>

                        <div className="register-link">
                            <p>
                                Don't have an account? <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
