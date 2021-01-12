import React from 'react';
import NB from "./NavBar"; 
import logo60x60 from '../images/icon60x60.png';

function Home({ handleLogOut }) {
  return (
    <div className="App">
      <div className="topnav">
          <img src={logo60x60} className="App-logo2" alt="logo" />
        </div>
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
        {/*NB is our navbar*/}
        <NB />
        </div>
  );
};

export default Home;