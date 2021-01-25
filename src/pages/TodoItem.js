import React from 'react';

const TodoItem = ({todos, removeTodo}) => {
    return(
        <>
        {todos.map(todoItem => (
                <div key={todoItem.todoId} className="todoItem">
                    <div className="decorline"></div>
                    <span className="check" onClick={() => removeTodo(todoItem.todoId)}>X</span>
                    <p>{todoItem.todoText}</p>
                </div>
        ))}
        </>
    );
};

export default TodoItem;