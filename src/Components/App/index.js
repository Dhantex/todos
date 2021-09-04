// import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {AppUI} from '../App/AppUI'

// const defaultToDos = [
//   { id: 1, text: 'Cortar cebolla', completed: true},
//   { id: 2, text: 'Tomar el curso de intro de react', completed: true},
//   { id: 3, text: 'Llorar con la llorona', completed: false},
//   { id: 4, text: 'search', completed: false},
// ];

//Custom Hooks
function useLocalStorage(storageName, initialValue){

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue)

  useEffect(() =>{

    try {

      setTimeout(() =>{

        const localStorageItem = localStorage.getItem(storageName)
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(storageName, JSON.stringify(initialValue))
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);

      },1000)

    } catch (error) {
        setError(error);
    }
  }) ;

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(storageName,stringifyItem)
  
      setItem(newItem);
    } catch (error) {
        setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}



function App() {

  //Se usa el custom Hooks creado.
  const{item: todos,
        saveItem: saveTodos ,
        loading,
        error,
        } = useLocalStorage('TODOS_V1',[]);

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

  // console.log('antes del use effect');

  // useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos]);

  // console.log('luego dle useffect');


  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue ={searchValue} 
      setSearchValue = {setSearchValue}
      todoFilter={todoFilter}
      completeTodoItem = {completeTodoItem}
      deleteTodoItem = {deleteTodoItem}
      loading = {loading}
      error = {error}
    />

  );
}

export default App;
