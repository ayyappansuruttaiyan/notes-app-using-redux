import React from "react";
import NotesList from "../Components/NotesList";
import TasksList from "../Components/TasksList";

function Home() {
  return (
    <div>
      <NotesList />
      <TasksList />
    </div>
  );
}

export default Home;
