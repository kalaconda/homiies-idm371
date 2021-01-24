import React from 'react';

const TodoItem = ({todos}) => {
    return(
        <>
        {todos.map(todoItem => (
            <div key={todoItem.todoId} className="todoItem">
                <p>{todoItem.todoText}</p>
                <span>X</span>
            </div>
        ))}
        </>
    );
};

export default TodoItem;