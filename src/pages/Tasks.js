import React from 'react';
import NB from "./NavBar"; 
import Form from './Form';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = () => {
    return (
      <div className="App">
      <div className="white">
        <Form />
      </div>
      <NB />
    </div>
    );
}
 
export default Tasks;