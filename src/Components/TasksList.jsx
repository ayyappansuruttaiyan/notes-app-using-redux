import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTaskFromList } from "../slices/tasksSlice";

function TasksList() {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function deleteTask(task) {
    dispatch(removeTaskFromList(task));
  }
  return (
    <div className="mt-5">
      {/* sample layout */}
      {tasksList &&
        tasksList.map((task, index) => (
          <div
            key={index}
            className="flex bg-white p-3 box-border   shadow-2xl shadow-black/150"
          >
            <div className="flex p-2 justify-between items-center text-xl font-medium border w-[100%]">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-circle-check"></i>
                <div className="flex flex-col">
                  <h1>{task.title}</h1>
                  <p className="text-xs">2 days left</p>
                </div>
              </div>

              <span>
                <i className="fa-solid fa-star mr-4"></i>
                {/* <i className="fa-solid fa-star mr-4"></i> */}
                <i
                  onClick={() => deleteTask(task)}
                  className="fa-solid fa-trash"
                ></i>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TasksList;
