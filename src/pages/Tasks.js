import React from 'react';
import NB from "./NavBar"; 
import TodoItem from "./TodoItem";
import Modal from "../components/Modal";

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({show, setShow, closeModalHandler, inputValue, setInputValue, handleSubmit, todos, errorMsg, removeTodo}) => {
    return (
      <div className="App">
        <NB />
      <div className="white">
          <div className="taskwelcome">
            <h2 class="taskwelcometxt"> Hello! </h2>
          </div>
          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          {show && <Modal closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>}
          {/*<p className="errorMsg">{errorMsg}</p>*/}
          <TodoItem removeTodo={removeTodo} todos={todos} />
      </div>
    </div>
    );
}
 
export default Tasks;