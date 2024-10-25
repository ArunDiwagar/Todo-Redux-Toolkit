// src/components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { selectFilteredTodos } from '../features/todosSlice';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;