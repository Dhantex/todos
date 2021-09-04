import React from 'react';
import {useContext,useState} from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');

    const { 
        AddTodoItem, 
        setOpenModal,
    } = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        AddTodoItem(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    return(
      <form onSubmit={onSubmit}>
          <label>Agrega un nuevo TODO</label>
          <textarea 
            value={newTodoValue}
            onChange={onChange}
            name="ToDo"
            placeholder="Ingresa tu nuevo ToDo">
         </textarea>

         <div className="TodoForm-buttonContainer">
            <button
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                type="button"
            >Cancelar
            </button>
            
            <button 
                className="TodoForm-button TodoForm-button--add"
                onClick={onSubmit}
                type="submit"
            >Añadir
            </button>
         </div>
      </form>  
    );
}

export {TodoForm}