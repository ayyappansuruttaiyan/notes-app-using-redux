import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesList: [],
  selectedNote: {},
  deletedNoteList: [],
};

const notesSlice = createSlice({
  name: "notesSlice",
  initialState: initialState,
  reducers: {
    addNoteToList: (state, action) => {
      const id = Math.random() * 100;
      let note = { ...action.payload, id };
      state.notesList.push(note);
    },
    removeNoteFromList: (state, action) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload.id
      );
    },
    updateNoteInList: (state, action) => {
      state.notesList = state.notesList.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    setSelectedNote: (state, action) => {
      state.selectedNote = action.payload;
    },
    addDeletedNotesToList: (state, action) => {
      let note = { ...action.payload };
      state.deletedNoteList.push(note);
    },
    removeNoteFromBin: (state) => {
      state.deletedNoteList = [];
    },
  },
});

export const {
  addNoteToList,
  removeNoteFromList,
  updateNoteInList,
  setSelectedNote,
  addDeletedNotesToList,
  removeNoteFromBin,
} = notesSlice.actions;
export default notesSlice.reducer;
