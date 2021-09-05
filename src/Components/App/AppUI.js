import React from 'react';
import {useContext} from 'react';

import {TodoCounter} from '../TodoCounter'
import {TodoContext} from '../TodoContext'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'
import {Modal} from '../Modal'
import { TodoForm } from '../TodoForm';
import { Loading } from '../Loading';
import { TodoError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodoItem,
        deleteTodoItem,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

                    <TodoList>
                        {error && <TodoError error={error}/>}
                        {loading && <Loading />}
                        {(!loading && !searchedTodos.length) && <EmptyTodos/>}

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

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

            </React.Fragment>
    );
}

export {AppUI};