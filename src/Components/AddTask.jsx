import React, { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  function addTask() {
    console.log(title, description);
  }

  return (
    <div className="container">
      <form
        onSubmit={addTask}
        className=" container flex bg-white w-[100%] flex-col rounded p-4 "
      >
        <span className="flex justify-between text-xl font-semibold">
          <p>Add a Task</p>
          <i
            onClick={onToggle}
            className="fa-solid fa-xmark cursor-pointer"
          ></i>
        </span>
        {isOpen && (
          <>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="my-4 border border-solid border-slate-300 p-2"
            />
            <input
              type="textarea"
              placeholder="Add a Task"
              value={title}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-solid border-slate-300 p-2"
            />
            <div className="flex items-center">
              <input className="m-4" type="date" />
              <span>Date/Time</span>
            </div>

            <button className="flex bg-slate-200 w-max rounded-full p-2 items-center justify-content my-4 font-semibold">
              Add Task
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default AddTask;
