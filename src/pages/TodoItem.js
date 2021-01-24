import React from 'react';

const TodoItem = ({todos, removeTodo}) => {
    return(
        <>
        {todos.map(todoItem => (
            <div key={todoItem.todoId} className="todoItem">
                <p>{todoItem.todoText}</p>
                <span onclick={() => removeTodo(todoItem.todoId)}>X</span>
            </div>
        ))}
        </>
    );
};

export default TodoItem;