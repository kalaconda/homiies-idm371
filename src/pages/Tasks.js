import React from 'react';
import NB from "./NavBar"; 
import TodoItem from "./TodoItem";
import logo60x60 from '../images/icon60x60.png';
import Modal from "../components/Modal";

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({show, setShow, closeModalHandler, inputValue, setInputValue, handleSubmit, todos, errorMsg, removeTodo}) => {
    return (
      <div className="App">
      <div className="white">
        <div className="topnav">
          <img src={logo60x60} className="App-logo2" alt="logo" />
        </div>
          <div className="heading">
            <div class="yellowline"></div>
            <h3>Tasks</h3>
          </div>
          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          <Modal show={show} closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
          {/*<p className="errorMsg">{errorMsg}</p>*/}
          <TodoItem removeTodo={removeTodo} todos={todos} />
      </div>
      <NB />
    </div>
    );
}
 
export default Tasks;