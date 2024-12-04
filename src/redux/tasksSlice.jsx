


import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromStorage = () => {
  try {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return []; 
  }
};


const saveTasksToStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
};

const initialState = {
  tasks: loadTasksFromStorage(), 
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToStorage(state.tasks); 
    },
    editTask: (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...action.payload };
        saveTasksToStorage(state.tasks);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToStorage(state.tasks); 
    },
    toggleTaskCompleted: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(state.tasks); 
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload; 
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompleted, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
