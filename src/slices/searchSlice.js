import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchNotes: (state, action) => {
      //  logic to filter notes based on the search query
      const searchQuery = action.payload.toLowerCase();
      state.searchResults = state.notesList.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery) ||
          note.description.toLowerCase().includes(searchQuery)
      );
    },

    searchTasks: (state, action) => {
      //  logic to filter tasks based on the search query
      const searchQuery = action.payload.toLowerCase();
      state.searchResults = state.tasksList.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery) ||
          task.description.toLowerCase().includes(searchQuery)
      );
    },
  },
});

export const { searchNotes, searchTasks } = searchSlice.actions;
export default searchSlice.reducer;
