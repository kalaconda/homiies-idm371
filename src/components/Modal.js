import React from "react";
import { BiArrowBack } from 'react-icons/bi';
import plus_button from '../images/plus_button.png';
import "../Modal.css";

const Modal = ({ show, closeModalHandler, inputValue, setInputValue, handleSubmit }) => {
    return (
        <div className="modal-wrapper"
        style={{
            opacity: show ? '1' : '0'
        }}
        >
            <div className="modal-header">
                <span onClick={closeModalHandler} className="close-modal-btn"><BiArrowBack/></span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                {/* get input value and add todo */}
                <form onSubmit={handleSubmit}>
                    <input 
                    className="settaskinput"
                    value= {inputValue} 
                    onChange= {e => setInputValue(e.target.value)} 
                    type="text" 
                    placeholder="Enter task..." 
                    />
            
                    <div className="task-options">
                        <ul>
                            <li>
                                    <p id="column1">Take out trash</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1" >Clean the floors</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1">Wash dishes</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1">Empty Dishwasher</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                        </ul>
                    </div>

                    <button type="submit" className="btn-cancel">Set Task</button>
                    
                    </form>
                    
                    <hr></hr>

                </div>
            </div>
        </div>
    )
}

export default Modal;