import { createSlice } from "@reduxjs/toolkit";

const initialState: Todo[] = [
  {
    text: "Add a new Note",
    completed: false,
    id: 0,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    noteAdded: (state, action) => {
      const todo = action.payload;
      todo.id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      state.push(todo);
    },
    noteDeleted: (state, action) =>
      state.filter((note) => note.id !== action.payload.id),
    noteEdited: (state, action) => {
      state.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return state;
    },
    noteCompleted: (state, action) => {
      state.map((note) => {
        if (note.id === action.payload.id) {
          note.completed = !note.completed;
        }
        return note;
      });
      return state;
    },
    clearCompleted: (state) => state.filter((note) => !note.completed),
  },
});

export const reducer = todoSlice.reducer;
export const {
  noteAdded,
  noteCompleted,
  noteDeleted,
  noteEdited,
  clearCompleted,
} = todoSlice.actions;
