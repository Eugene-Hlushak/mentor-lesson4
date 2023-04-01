import { createSlice } from '@reduxjs/toolkit';

const sliceToDo = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addToDo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});
export const { addToDo, deleteToDo } = sliceToDo.actions;
export default sliceToDo.reducer;
