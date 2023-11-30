import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedNote,
  updateNoteInList,
  removeNoteFromList,
  addDeletedNotesToList,
} from "../slices/notesSlice";

function NotesList() {
  const { selectedNote, notesList } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setUpdatedTitle(selectedNote.title);
      setUpdatedDescription(selectedNote.description);
    }
  }, [selectedNote]);

  // Function to handle the update of a note
  const handleUpdateNote = () => {
    const updatedNote = {
      ...selectedNote,
      title: updatedTitle,
      description: updatedDescription,
      updatedAt: new Date().toLocaleTimeString(),
    };

    dispatch(updateNoteInList(updatedNote));
    dispatch(setSelectedNote(null)); // Clear selected note after update
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  // Function to cancel the update and close the form
  const cancelUpdateNote = () => {
    dispatch(setSelectedNote(null));
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  // Function to delete note
  const deleteNote = (note) => {
    dispatch(removeNoteFromList(note));
    dispatch(addDeletedNotesToList(note));
  };

  return (
    <div>
      {notesList.length > 0 && (
        <>
          <span className="my-4 flex flex-col">
            <h4 className="text-xl font-medium">
              <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
            </h4>
            <p className="font-sm my-2">Recently Viewed</p>
          </span>

          <div className="grid grid-cols-3 gap-2">
            {notesList &&
              notesList.map((note) => (
                <div
                  key={note.id}
                  className="shadow-black/150  box-border basis-1/4 rounded  bg-white p-2 shadow-2xl"
                >
                  {selectedNote && selectedNote.id === note.id ? (
                    // Show update form if note is selected
                    <>
                      <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Note Title"
                        className="mb-2 w-[100%] border border-solid border-slate-300 p-2"
                      />
                      <textarea
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        placeholder="Take a Note"
                        className="mb-2 w-[100%] border border-solid border-slate-300 p-2"
                      />
                      <div className="flex items-center justify-between">
                        <button
                          onClick={handleUpdateNote}
                          className="justify-content my-4 mr-2 w-max items-center rounded bg-slate-200 p-2 font-semibold hover:bg-dark-blue hover:text-white"
                        >
                          Update Note
                        </button>
                        <button
                          onClick={() => cancelUpdateNote()}
                          className="justify-content my-4 w-max items-center rounded bg-red-500 p-2 font-semibold hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    // Show note details if not selected
                    <>
                      <span className="flex justify-between text-xl font-medium">
                        <h2 className="mb-2">{note.title}</h2>
                        <span>
                          <i
                            onClick={() => dispatch(setSelectedNote(note))}
                            className="fa-solid fa-pencil mr-3 cursor-pointer"
                          ></i>
                          <i
                            onClick={() => deleteNote(note)}
                            className="fa-solid fa-trash cursor-pointer"
                          ></i>
                        </span>
                      </span>
                      <p className="mb-2">{note.description}</p>
                      <p>{note.updatedAt || note.createdAt}</p>
                    </>
                  )}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NotesList;
