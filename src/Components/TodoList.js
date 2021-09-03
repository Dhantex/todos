import React from 'react';
import './Styles/TodoList.css';

function TodoList(props) {
    return(
        <section>
            {props.children}
        </section>
    )
}

export {TodoList};