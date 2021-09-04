import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({newValue, setNewValue}){

    const onClickButton = (msg) => {
        setNewValue(msg);
        console.log(newValue);
    }

    return(
        <button className="CreateTodoButton"
        onClick={() => onClickButton("Prueba onClick")}
        >
        
        +
        
        </button>
    );
}

export {CreateTodoButton}