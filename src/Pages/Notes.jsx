import React from "react";
import AddNote from "../Components/AddNote";
import NotesList from "../Components/NotesList";

function Notes() {
  return (
    <div>
      <AddNote />
      <NotesList />
    </div>
  );
}

export default Notes;
