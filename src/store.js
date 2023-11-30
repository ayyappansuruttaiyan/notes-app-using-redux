import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import notesReducer from "./slices/notesSlice";
import profileReducer from "./slices/profileSlice";
import searchReducer from "./slices/searchSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
    profile: profileReducer,
    search: searchReducer,
  },
});
