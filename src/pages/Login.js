import React, { useState } from "react";
import logo60x60 from '../images/icon60x60.png';

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;

    const [selected, setSelected] = useState("Faculty");

    return (
    <section className="login">
      <div className="topnav">
        <img src={logo60x60} className="App-logo2" alt="logo" />
        </div>
          <div className="loginContainer">
            <label>Your Email</label>
            <input
              type="text"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Set Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <button onClick={handleLogin}>Sign In</button>

                  <p>
                    Don't have a account?
                    <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                  </p>
                </>
              ) : (
                <>
                  <button onClick={handleSignup}>Continue</button>
              
                  <p>
                    Have and account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                  </p>
                </>
              )}
      </div>
      </div>
    </section>
  );
};

export default Login;
