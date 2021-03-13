import React from 'react';
import options from '../images/moreopt.png';
import "../check-anim.css";

const TodoItem = ({todos, removeTodo}) => {
    return(
        <>
        {todos.map(todoItem => (
            <div class="todoItemm">
                <div key={todoItem.todoId} className="todoItem">
                    <div class="cbx">
                        <input type="checkbox" /*onClick={() => removeTodo(todoItem.todoId)}*/></input>
                        <label for="cbx"></label>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                        </svg>
                    </div>
                    
                    <p>
                        <span class="strikethrough">
                            {/* text being added to the todo item */}
                            {todoItem.todoText}
                        </span>
                    </p>
                    </div>

                <div className="reactcontainer">
                    <a href="#" className="extraopt-container">
                        <img className="optionsbtn" src={options} alt="more options"/>
                        <div className="options">
                            <div id="optionitem1">
                                Edit
                            </div>
                            <hr id="optionline"></hr>
                            <div id="optionitem2" onClick={() => removeTodo(todoItem.todoId)}>
                                Delete
                            </div>
                        </div>
                    </a> 
                </div>
                </div>
                
        ))}
        
        </>
    );
};

export default TodoItem;