import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNoteFromBin } from "../slices/notesSlice";
import { removeTaskFromBin } from "../slices/tasksSlice";

function Bin() {
  const { deletedNoteList } = useSelector((state) => state.notes);
  const { deletedTaskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(deletedTaskList);
  function emptyBin() {
    dispatch(removeNoteFromBin());
    dispatch(removeTaskFromBin());
  }
  console.log(deletedNoteList);
  return (
    <div>
      <button
        type="button"
        disabled={deletedNoteList.length === 0 && deletedTaskList.length === 0}
        onClick={() => emptyBin()}
        className={`flex bg-slate-300 w-max rounded p-2 items-center justify-content my-4 font-semibold hover:bg-dark-blue hover:text-white ${
          deletedNoteList.length === 0 && deletedTaskList.length === 0
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        Empty Bin
      </button>
      <div>
        {deletedNoteList && (
          <>
            <span className="flex row my-4">
              <p className="font-sm my-2">
                You have{" "}
                <label className="font-medium">
                  {" "}
                  {deletedNoteList.length}{" "}
                </label>
                deleted <label className="font-medium">notes</label>
              </p>
            </span>
            <div className="grid grid-cols-3 gap-2">
              {deletedNoteList &&
                deletedNoteList.map((note) => (
                  <div
                    key={note.id}
                    className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
                  >
                    <span className="flex justify-between text-xl font-medium">
                      <h2 className="mb-2">{note.title}</h2>
                    </span>
                    <p className="mb-2">{note.description}</p>
                    <p className="mb-2">{note.time}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <div>
        {deletedTaskList && (
          <>
            <span className="flex row my-4">
              <p className="font-sm my-2">
                You have
                <label className="font-medium">
                  {" "}
                  {deletedTaskList.length}{" "}
                </label>
                deleted <label className="font-medium"> tasks</label>
              </p>
            </span>
            <div className="grid grid-cols-3 gap-2">
              {deletedTaskList &&
                deletedTaskList.map((task) => (
                  <div
                    key={task.id}
                    className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
                  >
                    <span className="flex justify-between text-xl font-medium">
                      <h2 className="mb-2">{task.title}</h2>
                    </span>
                    <p className="mb-2">{task.description}</p>
                    <p className="mb-2">{task.date}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Bin;
