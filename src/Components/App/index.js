// import './App.css';
import React from 'react';
import {useState} from 'react';
import {AppUI} from '../App/AppUI'

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
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue ={searchValue} 
      setSearchValue = {setSearchValue}
      todoFilter={todoFilter}
      completeTodoItem = {completeTodoItem}
      deleteTodoItem = {deleteTodoItem}

    />

  );
}

export default App;
