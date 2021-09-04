import React from 'react';
import {useState, createContext} from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = createContext();

function TodoProvider(props){

    //Se usa el custom Hooks creado.
    const{
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage('TODOS_V1',[]);

    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    // var item = {id: {totalTodos}+1, text: {newValue}, completed: false}


    const completeTodoItem = (id) =>{

    let searchedTodos = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos[searchedTodos].completed = !newTodos[searchedTodos].completed;

    saveTodos(newTodos);
    };

    const deleteTodoItem = (id) =>{

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    // delete newTodos[todoIndex];

    saveTodos(newTodos);
    };

    // console.log('antes del use effect');

    // useEffect(() => {
    //   console.log('use effect')
    // }, [totalTodos]);

    // console.log('luego dle useffect');

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodoItem,
            deleteTodoItem,
            loading,
            error,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };





