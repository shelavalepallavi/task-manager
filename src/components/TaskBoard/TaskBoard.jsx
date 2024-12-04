
import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskBoard.css';

const TaskBoard = ({ tasks }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0); 
    return !task.completed && taskDate >= today;
  });
  const overdueTasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0); 
    return !task.completed && taskDate < today;
  });

  return (
    <div className="task-board">
      <div className="task-column">
        <div className="task-headcomplete">
          <div className="task-complete"></div>
          <h4>Completed Tasks</h4>
          <span>{completedTasks.length}</span>
        </div>
        {completedTasks.length === 0 ? (
          <p className="tashboard-para">No completed tasks</p>
        ) : (
          completedTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>

      <div className="task-column">
        <div className="task-headpending">
          <div className="task-pending"></div>
          <h4>Pending Tasks</h4>
          <span>{pendingTasks.length}</span>
        </div>
        {pendingTasks.length === 0 ? (
          <p className="tashboard-para">No pending tasks</p>
        ) : (
          pendingTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>

      <div className="task-column">
        <div className="task-headdue">
          <div className="task-overdue"></div>
          <h4>Overdue Tasks</h4>
          <span>{overdueTasks.length}</span>
        </div>
        {overdueTasks.length === 0 ? (
          <p className="tashboard-para">No overdue tasks</p>
        ) : (
          overdueTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
