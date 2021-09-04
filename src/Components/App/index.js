// import './App.css';
import React from 'react';
import {useState} from 'react';
import {AppUI} from '../App/AppUI'

// const defaultToDos = [
//   { id: 1, text: 'Cortar cebolla', completed: true},
//   { id: 2, text: 'Tomar el curso de intro de react', completed: true},
//   { id: 3, text: 'Llorar con la llorona', completed: false},
//   { id: 4, text: 'search', completed: false},
// ];

//Custom Hooks
function useLocalStorage(storageName, initialValue){

  const localStorageItem = localStorage.getItem(storageName)
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(storageName, JSON.stringify(initialValue))
    parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)
  
  const saveItem = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(storageName,stringifyItem)
    
    setItem(newItem);
  }
  
  return [
    item,
    saveItem,
  ];
}



function App() {

  //Se usa el custom Hooks creado.
  const[todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState('');
  // const [newValue, setNewValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const todoFilter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  // var item = {id: {totalTodos}+1, text: {newValue}, completed: false}
  



  const completeTodoItem = (id) =>{

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  const deleteTodoItem = (id) =>{

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    // delete newTodos[todoIndex];

    saveTodos(newTodos);
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
