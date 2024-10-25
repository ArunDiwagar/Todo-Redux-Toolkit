import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'all', // can be 'all', 'completed', or 'pending'
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, removeTodo, setFilter } = todosSlice.actions;

// Export selector for filtering tasks
export const selectFilteredTodos = (state) => {
  if (state.todos.filter === 'completed') {
    return state.todos.tasks.filter((task) => task.completed);
  }
  if (state.todos.filter === 'pending') {
    return state.todos.tasks.filter((task) => !task.completed);
  }
  return state.todos.tasks; // 'all'
};

// Export the reducer
export default todosSlice.reducer;
