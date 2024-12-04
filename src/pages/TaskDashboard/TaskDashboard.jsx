import React, { useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm'; 
import './TaskDashboard.css';
import TaskContainer from '../../components/TaskContainer/TaskContainer';

const TaskDashboard = () => {
  const [view, setView] = useState('all'); 
  const [showForm, setShowForm] = useState(false);

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className='taskdashboard'>
      <div className='taskdashboard-header'>
        <h1>Tasks</h1>
        <button 
          className='taskdashboard-link' 
          onClick={() => setShowForm(true)} 
        >
          Add New Task
        </button>
      </div>

      {showForm ? (
        <TaskForm 
          onClose={() => setShowForm(false)} 
        />
      ) : (
        <>
          <div className='taskdashboard-main'>
            <p 
              className={view === 'all' ? 'active' : ''} 
              onClick={() => handleViewChange('all')}
            >
              All Tasks
            </p>
            <p 
              className={view === 'board' ? 'active' : ''} 
              onClick={() => handleViewChange('board')}
            >
              Board
            </p>
          </div>
          <TaskContainer view={view} />
        </>
      )}
    </div>
  );
};

export default TaskDashboard;
