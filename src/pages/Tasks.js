import React from 'react';
import NB from "./NavBar"; 
import Form from './Form';
import TodoItem from "./TodoItem";
import logo60x60 from '../images/icon60x60.png';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({inputValue, setInputValue, handleSubmit, todos, errorMsg, removeTodo}) => {
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
          <div className="heading">
            <div class="yellowline"></div>
            <h3>Tasks</h3>
          </div>
          {/*<p className="errorMsg">{errorMsg}</p>*/}
          <TodoItem removeTodo={removeTodo} todos={todos} />
          <Modal />
      </div>
      <NB />
    </div>
    );
}
 
export default Tasks;