//Custom Hooks
import {useState, useEffect} from 'react';

function useLocalStorage(storageName, initialValue){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue)

    useEffect(() =>{

        setTimeout(() =>{

            try {
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

                } catch (error) {
                    setError(error);
                }
        },1000)
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

  export {useLocalStorage};