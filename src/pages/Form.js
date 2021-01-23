import React from 'react';

const Form = () => {
    return(
        <form className="addtodo">
            <input type="text" placeholder="Add todo..." />
            <button type="submit" className="addtask">+</button>
        </form>
    )
}

export default Form;