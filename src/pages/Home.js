import React from 'react';
import NB from "./NavBar"; 

function Home({ handleLogOut }) {
  return (
    <div className="App">
      <NB />
        <button className="pinkbtn"  onClick={handleLogOut}>
          Logout
        </button>
        </div>
  );
};

export default Home;