import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../assets/logo.png'
import axios from 'axios';
import Loader from '../components/Loader';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('https://us-central1-vanillasoft-to-ghl.cloudfunctions.net/function-1/middleware/login', { username: username, password: password });
            if (response.status === 200) {
                sessionStorage.setItem('token', 'EsM8dh3RYIYwwIEyhuAQbEAh3FKazhaT4Ge3o0Rw6fQ2dgbSizKDSijtuFJ9EIg0');
                navigate('/dashboard')
                console.log(response)
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
        setLoading(false)
    };

    return (
        <>{loading ? <Loader /> : <></>}
            <div className={'login-container' + (loading ? " enable" : "")}>
                <div className="login">
                    <div className="top">
                        <div className="logo">
                            <img src={logo} alt="" />
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
        </>
    );
}

export default Login;
