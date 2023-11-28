import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import notesReducer from "./slices/notesSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
  },
});
