import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../redux/tasksSlice';
import './TaskForm.css';

const TaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(editTask({ id: task.id, title, description, dueDate }));
    } else {
      dispatch(addTask({ id: Date.now(), title, description, dueDate, completed: false }));
    }
    onClose();
  };

  return (
    <div className="taskform">
      <span className="taskform-close" onClick={onClose}>&times;</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">Description</label>
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">{task ? 'Edit Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
