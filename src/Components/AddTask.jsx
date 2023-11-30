import React, { useState } from "react";
import { addTaskToList } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";

function AddTask() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  function addTask(e) {
    e.preventDefault();
    if (title && description) {
      console.log(title, description, date);
      dispatch(addTaskToList({ title, description, date }));
      setTitle("");
      setDescription("");
      setDate(new Date().toLocaleTimeString());
    }
  }

  return (
    <div className="container">
      <form
        onSubmit={addTask}
        className=" container flex w-[100%] flex-col rounded bg-white p-4 "
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
              placeholder="Task Title"
              onChange={(e) => setTitle(e.target.value)}
              className="my-4 border border-solid border-slate-300 p-2"
            />
            <input
              type="textarea"
              placeholder="Add a Task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-solid border-slate-300 p-2"
            />
            <div className="flex items-center">
              <input
                className="m-4"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span>Date/Time</span>
            </div>

            <button className="justify-content my-4 flex w-max items-center rounded bg-slate-200 p-2 font-semibold hover:bg-dark-blue hover:text-white ">
              Add Task
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default AddTask;
