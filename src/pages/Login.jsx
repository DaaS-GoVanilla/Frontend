import React from 'react'
import './login.css'

function Login() {
    return (
        <div class='login-container'>
            <div class="login">
                <div class="top">
                    <div class="logo">
                        <img src="/src/assets/logo.png" alt="" />
                    </div>
                    <div class="name">
                        <p>loansondemand.io</p>
                    </div>

                </div>

                <div class="wrapper">
                    <form action="">
                        <h1>Login</h1>
                        <div class="input-box">
                            <input type="text" placeholder="Username" required />
                            <i class='bx bxs-user'></i>
                        </div>

                        <div class="input-box">
                            <input type="password" placeholder="Password" required />
                            <i class='bx bxs-lock-alt'></i>
                        </div>

                        <div class="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" class="btn">Submit</button>

                        <div class="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login