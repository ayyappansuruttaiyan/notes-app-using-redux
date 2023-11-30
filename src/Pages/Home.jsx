import React from "react";
import NotesList from "../Components/NotesList";
import { useSelector } from "react-redux";
import TasksList from "../Components/TasksList";

function Home() {
  const { notesList } = useSelector((state) => state.notes);
  const { tasksList } = useSelector((state) => state.tasks);
  const { profile } = useSelector((state) => state.profile);
  return (
    <div className="container">
      <h2 className="text-2xl font-medium border-b-2 border-solid border-gray-50 pb-4">
        Welcome, {profile.name}
      </h2>

      <span className="flex row my-4">
        <h4 className="text-xl font-medium">
          <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
        </h4>
      </span>
      {notesList.length === 0 ? (
        <p className="font-sm my-2">You have 0 Notes</p>
      ) : (
        <NotesList />
      )}

      <span className="flex row my-4">
        <h4 className="text-xl font-medium">
          <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Tasks
        </h4>
      </span>
      {tasksList.length === 0 ? (
        <p className="font-sm my-2">You have 0 Tasks</p>
      ) : (
        <TasksList />
      )}
    </div>
  );
}

export default Home;
