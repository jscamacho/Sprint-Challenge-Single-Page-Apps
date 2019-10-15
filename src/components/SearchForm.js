import React, { useState } from "react";
import { Form } from 'semantic-ui-react';

  export default function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useLocalStorage('');
    const {onSearch} = props;
  
    const handleInputChange = event => {
      setSearchTerm(event.target.value);
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      onSearch(`?name=${searchTerm}`);
    }
  
    
    function useLocalStorage(key, initialValue) {
      const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.log('major error');
          return initialValue;
        }
      });

      const setValue = value => {
        try {
          const valueToStore =
            value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.log('major error');
        }
      };
  
      return [storedValue, setValue];
    }
    return (
      <section className="search-form">
         <Form onSubmit={event => handleSubmit(event)}>
        <Form.Field
          control='input'
          onChange={handleInputChange}
          placeholder="Search by Name"
          value={searchTerm}
          name="searchterm"
        />
        <button type="submit">Search</button>
        </Form>
    </section>
  );
}