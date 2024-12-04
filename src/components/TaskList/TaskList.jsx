import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className='tasklist'>
      {tasks.length === 0 ? (
        <p className='tasklist-para'>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;
