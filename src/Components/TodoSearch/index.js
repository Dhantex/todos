import React from 'react';
import {useContext} from 'react';
import {TodoContext} from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            onChange={onSearchValueChange}
            value={searchValue}
        />);
}

export {TodoSearch};