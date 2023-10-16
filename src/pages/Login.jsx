import React from 'react'
import './login.css'

function Login() {
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
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className='bx bxs-user'></i>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn">Submit</button>

                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login