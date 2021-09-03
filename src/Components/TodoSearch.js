import React from 'react';
import './Styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    // const [searchValue, setSearchValue] = React.useState('');

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