import React from 'react';

import {TodoCounter} from '../TodoCounter'
import {TodoContext} from '../TodoContext'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'

function AppUI(){
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodoItem,
                    deleteTodoItem,
                }) => (
                    <TodoList>
                        {error && <p>Ha ocurrido un error en la aplicación...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer ToDo!</p>}

                        {searchedTodos.map(todo => (
                            <TodoItem 
                                    key={todo.id} 
                                    text={todo.text} 
                                    completed={todo.completed}
                                    onComplete={() => completeTodoItem(todo.id)}
                                    onDelete={() => deleteTodoItem(todo.id)}
                            />
                        ))}

                        {/* {todoFilter.map((item, i) => (
                        <TodoItem key={i}{...item} />
                        ))} */}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />

            </React.Fragment>
    );
}

export {AppUI};