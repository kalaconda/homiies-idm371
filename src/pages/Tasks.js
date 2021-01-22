import React from 'react';
import logo60x60 from '../images/icon60x60.png';
import Form from './pages/Form';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = () => {
    return (
      <div className="App">
      <div className="white">
        <div className="topnav">
          <img src={logo60x60} className="App-logo2" alt="logo" />
        </div>
        <div className="container">
        <Form />
      </div>
      </div>
    </div>
    );
}
 
export default Tasks;