// import './App.css';
import React from 'react';
import {TodoProvider} from '../TodoContext';
import {AppUI} from './AppUI'

// const defaultToDos = [
//   { id: 1, text: 'Cortar cebolla', completed: true},
//   { id: 2, text: 'Tomar el curso de intro de react', completed: true},
//   { id: 3, text: 'Llorar con la llorona', completed: false},
//   { id: 4, text: 'search', completed: false},
// ];


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
