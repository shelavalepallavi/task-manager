import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted, editTask } from '../../redux/tasksSlice';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleEditClick = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(
      editTask({
        id: task.id,
        title: editedTitle,
        description: editedDescription,
        dueDate: editedDueDate,
        completed: task.completed, 
      })
    );
    setIsEditing(false);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteTask(task.id));
    setIsConfirmingDelete(false);
  };

  return (
    <div className="task-item">
      {!isEditing && !isConfirmingDelete ? (
        <>
          <h3 className="task-item-title">{task.title}</h3>
          <p className="task-item-description">{task.description}</p>
          <p className="task-item-due">Due: {task.dueDate}</p>
          <div className="task-item-footer">
            <button
              className="task-item-button toggle"
              onClick={() => dispatch(toggleTaskCompleted(task.id))}
            >
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button
              className="task-item-button edit"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="task-item-button delete"
              onClick={() => setIsConfirmingDelete(true)}
            >
              Delete
            </button>
          </div>
        </>
      ) : isEditing ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Task</h3>
            <form>
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Task Title"
                required
              />
              <label htmlFor="">Description</label>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Task Description"
                required
              />
              <label htmlFor="">Date</label>
              <input
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
                required
              />
              <div className="modal-buttons">
                <button
                  type="button"
                  className="task-item-button save"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="task-item-button cancel"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete the task: {task.title}?</p>
            <div className="modal-buttons">
              <button
                className="task-item-button confirm"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
              <button
                className="task-item-button cancel"
                onClick={() => setIsConfirmingDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
