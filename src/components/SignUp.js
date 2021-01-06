import React from 'react';
import '../styles/SignUp.css';



const SignUp = () => {
    return (
        <>
            <div className="sign-up-form">
                <i className="fas fa-user-plus"></i>
                <h1>Sign Up Now</h1>
                <form>
                    <input type="email" className="input-box" placeholder="Your Email"/>
                    <input type="password" className="input-box" placeholder="Your Password"/>
                    <p><span><input type="checkbox"/></span> I agree to the terms of services</p>
                    <button className="signup-btn">Sign Up</button>
                    <hr/>
                    <p className="or">or</p>
                    <button className="facebook-btn">Sign Up with Facebook</button>
                    <button className="twitter-btn">Sign Up with Twitter</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
