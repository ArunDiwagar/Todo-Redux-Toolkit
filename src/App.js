// src/App.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, setFilter } from './features/todosSlice';
import TodoList from './components/TodoList';
import './styles/App.css'; 

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="filters">
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      </div>

      <TodoList />
    </div>
  );
};

export default App;