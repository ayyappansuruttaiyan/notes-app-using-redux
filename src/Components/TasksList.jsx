import React from "react";

function TasksList() {
  return (
    <div className="mt-5">
      {/* sample layout */}
      <div className="flex bg-white p-3 box-border   shadow-2xl shadow-black/150">
        <div className="flex p-2 justify-between items-center text-xl font-medium border w-[100%]">
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-circle-check"></i>
            <div className="flex flex-col">
              <h1>File Upload</h1>
              <p className="text-xs">2 days left</p>
            </div>
          </div>

          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TasksList;
