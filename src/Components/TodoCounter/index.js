import React from 'react';
import {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

    const {totalTodos, completedTodos} = useContext(TodoContext);

    return(
        <React.Fragment>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO</h2>
        </React.Fragment>
    );
}

export {TodoCounter};