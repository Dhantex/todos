import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        <React.Fragment>
            <h2 className="TodoCounter">Has completado {completed} de {total} Todos</h2>
        </React.Fragment>
    );
}

export {TodoCounter};