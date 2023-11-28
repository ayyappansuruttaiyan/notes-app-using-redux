import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasksList: [],
  selectedTask: {},
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: initialState,
  /* reducers is responsible for mutate the store . if, want to  add task store, then need to create a reducer called addTaskToList(user defined name).
   addTaskToList reducer is responsible for add a task to the store.
   the reducer function receives default (strictly pass) paramaters like state, action. state is initial state in the store. action is nothing it is payload, it is initial state of the task in the store.
   payload is nothing but the new task we push to the store. payload is an object. like {id:1, name:"task", desc:"task description"}
   */
  reducers: {
    addTaskToList: (state, action) => {
      // every task need id. so, we create id dynamically
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeTaskFromList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskInList: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const {
  addTaskToList,
  removeTaskFromList,
  updateTaskInList,
  setSelectedTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
