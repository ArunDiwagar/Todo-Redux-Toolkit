// src/components/Todo.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todosSlice';
import '../styles/App.css'; // Correct import path

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </div>
  );
};

export default Todo;