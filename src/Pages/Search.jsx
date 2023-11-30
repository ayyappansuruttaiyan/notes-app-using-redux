import React, { useState } from "react";
import { useSelector } from "react-redux";

function Search() {
  const { notesList } = useSelector((state) => state.notes);
  const { tasksList } = useSelector((state) => state.tasks);

  const [searchNoteQuery, setSearchNoteQuery] = useState("");
  const [searchTaskQuery, setSearchTaskQuery] = useState("");
  // console.log(typeof notesList);
  // const combinedData = [Object.assign(notesList, tasksList)];
  // console.log(combinedData);

  const handleSearchNote = (list, query) =>
    list.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
  const handleSearchTask = (list, query) =>
    list.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
  const noteSearchResult = handleSearchNote(notesList, searchNoteQuery);
  const taskSearchResult = handleSearchTask(tasksList, searchTaskQuery);

  return (
    <>
      {/* {notesList.filter(note => )} */}

      {/* notes table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="font-medium my-4">List of Notes</h1>
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              value={searchNoteQuery}
              onChange={(e) => setSearchNoteQuery(e.target.value)}
              type="text"
              id="table-search"
              class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Note Id
              </th>
              <th scope="col" class="px-6 py-3">
                Note Title
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Created at
              </th>
            </tr>
          </thead>
          <tbody>
            {notesList &&
              noteSearchResult.map((note, index) => (
                <tr
                  key={index}
                  class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">{note.id}</td>
                  <td class="px-6 py-4">{note.title}</td>
                  <td class="px-6 py-4">{note.description}</td>
                  <td class="px-6 py-4">{note.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* tasks table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <h1 className="font-medium my-4">List of Tasks</h1>
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchTaskQuery}
              onChange={(e) => setSearchTaskQuery(e.target.value)}
              id="table-search"
              class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Task Id
              </th>
              <th scope="col" class="px-6 py-3">
                Task Title
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Created at
              </th>
            </tr>
          </thead>
          <tbody>
            {tasksList &&
              taskSearchResult.map((task, index) => (
                <tr
                  key={index}
                  class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">{task.id}</td>
                  <td class="px-6 py-4">{task.title}</td>
                  <td class="px-6 py-4">{task.description}</td>
                  <td class="px-6 py-4">{task.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Search;
