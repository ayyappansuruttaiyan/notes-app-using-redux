import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notesList: [],
  selectedNote: {},
};
const notesSlice = createSlice({
  name: "notesSlice",
  initialState: initialState,
  reducers: {
    addNoteToList: (state, action) => {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.notesList.push(task);
    },
  },
});

export const { addNoteToList } = notesSlice.actions;
export default notesSlice.reducer;
