// import './App.css';
import React from 'react';
import {useState} from 'react';

import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'

const defaultToDos = [
  { id: 1, text: 'Cortar cebolla', completed: true},
  { id: 2, text: 'Tomar el curso de intro de react', completed: true},
  { id: 3, text: 'Llorar con la llorona', completed: false},
  { id: 4, text: 'search', completed: false},
];


function App() {

  const [todos, setTodos] = useState(defaultToDos)
  const [searchValue, setSearchValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const todoFilter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  // var item = {id: {totalTodos}+1, text: {newValue}, completed: false}
  


  const completeTodoItem = (id) =>{

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const deleteTodoItem = (id) =>{

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    // delete newTodos[todoIndex];

    setTodos(newTodos);
  };  


  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue ={searchValue} 
        setSearchValue = {setSearchValue}
      />


      <TodoList>
        {todoFilter.map(todo => (
            <TodoItem key={todo.id} 
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

      <CreateTodoButton
        newValue = {newValue}
        setNewValue = {setNewValue}
      />

    </React.Fragment>

  );
}

export default App;
