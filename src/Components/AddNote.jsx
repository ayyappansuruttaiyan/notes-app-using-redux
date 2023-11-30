import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteToList } from "../slices/notesSlice";

function AddNote() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  function addNote(e) {
    e.preventDefault();
    if (title && description) {
      dispatch(addNoteToList({ title, description, createdAt: time }));
      setTitle("");
      setDescription("");
      setTime(new Date().toLocaleTimeString());
    }
  }

  return (
    <div className="container">
      <form className=" container flex w-[100%] flex-col rounded bg-white p-4">
        <span className="flex justify-between  text-xl font-semibold">
          <p>Add a Note</p>
          <i
            onClick={onToggle}
            className="fa-solid fa-xmark }
            cursor-pointer"
          ></i>
        </span>
        {isOpen && (
          <>
            <input
              type="text"
              value={title}
              placeholder="Note Title"
              onChange={(e) => setTitle(e.target.value)}
              className="my-4 border border-solid border-slate-300 p-2"
            />
            <input
              type="text"
              placeholder="Take a Note"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-solid border-slate-300  p-2"
            />

            <input type="text" />
            <div className="my-3 flex w-max items-center gap-2 rounded-full bg-slate-100 p-2">
              <i className="fa-regular fa-clock"></i>
              <p>{new Date().toLocaleTimeString()}</p>
            </div>
            <div className="flex gap-6">
              <i className="fa-solid fa-text-width cursor-pointer"></i>
              <i className="fa-solid fa-paintbrush cursor-pointer"></i>
              <i className="fa-solid fa-list-ul cursor-pointer"></i>
              <i className="fa-solid fa-a cursor-pointer"></i>
              <i className="fa-solid fa-align-left cursor-pointer"></i>
              <i className="fa-solid fa-rotate-left cursor-pointer"></i>
              <i className="fa-solid fa-rotate-right cursor-pointer"></i>
            </div>
            <span>
              <button
                onClick={addNote}
                className="justify-content my-4 flex w-max items-start rounded bg-slate-200 p-2 font-semibold hover:bg-dark-blue hover:text-white"
              >
                Add Note
              </button>
            </span>
          </>
        )}
      </form>
    </div>
  );
}

export default AddNote;
