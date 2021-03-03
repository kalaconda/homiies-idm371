import React from 'react';
import NB from "./NavBar"; 
import "../Onboarding.css";

const Home = ({ handleLogOut}) => {
  return (
    <div className="App">
      <NB />
      <div className="white">
                <p>Welcome, Jennifer!</p>
                <h1>Let's Get Started</h1>
                <label htmlFor="code">Have a group already? 
                <br></br>
                Join via code</label>
                <input type="text" id="code" name="code"></input>
                <button className="o-screen-button-style-1">Join Group</button>
                <button className="o-screen-button-style-2">Create a group</button>
        <a onClick={() => handleLogOut()}>
          <div className="pinkbtn">Logout</div>
          </a>
    </div>
    </div>
  );
}

export default Home;