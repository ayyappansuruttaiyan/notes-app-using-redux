import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedNote,
  removeNoteFromList,
  addDeletedNotesToList,
} from "../slices/notesSlice";

function NotesList() {
  const { selectedNote, notesList } = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTitle(selectedNote.title);
    setDescription(selectedNote.description);
  }, [selectedNote]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  // to update the task
  function updateNote(note) {
    setIsOpen(!isOpen);
    dispatch(setSelectedNote(note));
  }

  // to delete note
  function deleteNote(note) {
    dispatch(removeNoteFromList(note));
    dispatch(addDeletedNotesToList(note));
  }
  //  add deleted notes
  // function addDeletedNotes(note) {
  //   dispatch(addDeletedNotesToList(note));
  // }
  return (
    <>
      {isOpen && (
        <div>
          <div className=" container flex bg-white w-[100%] flex-col rounded p-4">
            <span className="flex justify-between  text-xl font-semibold">
              <p>Update Note</p>
              <i
                className="fa-solid fa-xmark cursor-pointer
            }"
              ></i>
            </span>
            {isOpen && (
              <>
                <input
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Note Title"
                  className="my-4 border border-solid border-slate-300 p-2"
                />
                <input
                  value={description}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Take a Note"
                  className="border border-solid border-slate-300  p-2"
                />

                <span>
                  <button className="flex bg-slate-200 w-max rounded-full p-2 items-start justify-content my-4 font-semibold">
                    Update Note
                  </button>
                </span>
              </>
            )}
          </div>
        </div>
      )}

      <div>
        {notesList.length > 0 && (
          <>
            <span className="flex flex-col my-4">
              <h4 className="text-xl font-medium">
                <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My
                Notes
              </h4>
              <p className="font-sm my-2">Recently Viewed</p>
            </span>

            <div className="grid grid-cols-3 gap-2">
              {notesList.map((note) => (
                <div
                  key={note.id}
                  className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
                >
                  <span className="flex justify-between text-xl font-medium">
                    <h2 className="mb-2">{note.title}</h2>
                    <span>
                      <i
                        onClick={() => updateNote(note)}
                        className="fa-solid fa-pencil mr-3 cursor-pointer"
                      ></i>
                      <i
                        onClick={() => deleteNote(note)}
                        className="fa-solid fa-trash cursor-pointer"
                      ></i>
                    </span>
                  </span>
                  <p className="mb-2">{note.description}</p>
                  <p>{time.toLocaleTimeString()}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NotesList;
