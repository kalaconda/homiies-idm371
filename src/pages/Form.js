import React from 'react';

const Form = ({inputValue, setInputValue, handleSubmit}) => {
    return(
        /* get input value and add todo */
        <form onSubmit={handleSubmit}>
            <input 
            value= {inputValue} 
            onChange= {e => setInputValue(e.target.value)} 
            type="text" 
            placeholder="Add todo..." 
            />
            <button type="submit" className="addtask">+</button>
        </form>
    )
}

export default Form;