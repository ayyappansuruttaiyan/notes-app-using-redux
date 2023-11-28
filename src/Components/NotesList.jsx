import React from "react";

function NotesList() {
  function updateNote() {
    console.log("update note");
  }
  function deleteNote() {
    console.log("Delete Note");
  }
  return (
    <div>
      {/* start my notes  */}
      {[{ id: Date.now(), title: "note", note: "note created" }].length > 0 && (
        <>
          <span className="flex row my-4">
            <h4 className="text-xl font-medium">
              <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
            </h4>
            <p className="font-sm my-2">Recently Viewed</p>
          </span>

          <div className="grid grid-cols-3 gap-2">
            {[{ id: Date.now(), title: "note", note: "note created" }].map(
              (note) => (
                <div
                  key={note.id}
                  className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
                >
                  <span className="flex justify-between text-xl font-medium">
                    <h2 className="mb-2">{note.title}</h2>
                    <span>
                      <button onClick={updateNote}>
                        <i className="fa-solid fa-pencil mr-3 cursor-pointer"></i>
                      </button>
                      <button onClick={deleteNote}>
                        <i className="fa-solid fa-trash cursor-pointer"></i>
                      </button>
                    </span>
                  </span>
                  <p className="mb-2">{note.note}</p>
                  <p>{Date.now()}</p>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NotesList;
