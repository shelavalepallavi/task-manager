import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskSearch from '../TaskSearch/TaskSearch'
import TaskList from '../TaskList/TaskList'
import TaskBoard from '../../components/TaskBoard/TaskBoard';
import './TaskContainer.css'

const TaskContainer = ({view}) => {
  const tasks = useSelector(state => state.tasks.tasks)
  const [searchItem, setSearchItem] = useState('')

  const filteredTasks = tasks.filter(
    (task) => task?.title && task.title.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className='taskcontainer'>
      <TaskSearch searchItem={searchItem} setSearchItem={setSearchItem}/>
      {view === 'all' && <TaskList tasks={filteredTasks} />}
      {view === 'board' && <TaskBoard tasks={filteredTasks} />}
    </div>
  )
}

export default TaskContainer
