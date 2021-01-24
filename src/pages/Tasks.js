import React from 'react';
import NB from "./NavBar"; 
import Form from './Form';
import TodoItem from "./TodoItem";
import logo60x60 from '../images/icon60x60.png';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({inputValue, setInputValue, handleSubmit, todos}) => {
    return (
      <div className="App">
      <div className="white">
        <div className="topnav">
          <img src={logo60x60} className="App-logo2" alt="logo" />
        </div>
        <Form 
          handleSubmit={handleSubmit} 
          inputValue= {inputValue} 
          setInputValue= {setInputValue} 
          />
        <TodoItem todos={todos} />
      </div>
      <NB />
    </div>
    );
}
 
export default Tasks;