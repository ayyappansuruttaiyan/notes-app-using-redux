import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteToList } from "../slices/notesSlice";

function AddNote() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  function addNote(e) {
    e.preventDefault();
    if (title && description) {
      dispatch(addNoteToList({ title, description, created: time }));
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="container">
      <form className=" container flex bg-white w-[100%] flex-col rounded p-4">
        <span className="flex justify-between  text-xl font-semibold">
          <p>Add a Note</p>
          <i
            onClick={onToggle}
            className="fa-solid fa-xmark cursor-pointer
            }"
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
            <div className="flex items-center bg-slate-100 w-max p-2 gap-2 rounded-full my-3">
              <i className="fa-regular fa-clock"></i>
              <p>{time.toLocaleTimeString()}</p>
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
                className="flex bg-slate-200 w-max rounded-full p-2 items-start justify-content my-4 font-semibold"
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
