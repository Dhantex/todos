import React from 'react';

import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'

function AppUI(props){
    return (
        <React.Fragment>
            <TodoCounter 
                total={props.totalTodos}
                completed={props.completedTodos}
            />

            <TodoSearch
                searchValue ={props.searchValue} 
                setSearchValue = {props.setSearchValue}
            />


            <TodoList>
                {props.todoFilter.map(todo => (
                    <TodoItem key={todo.id} 
                            text={todo.text} 
                            completed={todo.completed}
                            onComplete={() => props.completeTodoItem(todo.id)}
                            onDelete={() => props.deleteTodoItem(todo.id)}
                    />
                ))}

                {/* {todoFilter.map((item, i) => (
                <TodoItem key={i}{...item} />
                ))} */}
            </TodoList>

            <CreateTodoButton
                newValue = {props.newValue}
                setNewValue = {props.setNewValue}
            />

            </React.Fragment>
    );
}

export {AppUI};