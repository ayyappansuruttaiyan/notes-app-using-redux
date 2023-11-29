import React from "react";
import { useSelector } from "react-redux";

function Bin() {
  const { deletedNoteList } = useSelector((state) => state.notes);
  console.log(deletedNoteList);
  return (
    <div>
      <button>Empty bin</button>
      {deletedNoteList && (
        <>
          <span className="flex row my-4">
            <p className="font-sm my-2">
              You have {deletedNoteList.length} items
            </p>
          </span>
          <div className="grid grid-cols-3 gap-2">
            {deletedNoteList.map((note) => (
              <div
                key={note.id}
                className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
              >
                <span className="flex justify-between text-xl font-medium">
                  <h2 className="mb-2">{note.title}</h2>
                </span>
                <p className="mb-2">{note.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Bin;
