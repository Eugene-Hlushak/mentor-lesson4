import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import {addToDo } from '../../redux/sliceToDo'

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch()
  
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

      const todo = {
        id: nanoid(),
        text: query,
    };
    
     dispatch(addToDo(todo));
     setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
