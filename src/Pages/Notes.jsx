import React from "react";
import AddTask from "../Components/AddNote";
import NotesList from "../Components/NotesList";

function Notes() {
  return (
    <div>
      <AddTask />
      <NotesList />
    </div>
  );
}

export default Notes;
