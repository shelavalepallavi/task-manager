import React from 'react'
import './TaskSearch.css'

const TaskSearch = ({searchItem, setSearchItem}) => {
  return (
    <div className='tasksearch'>
      <input type="text" placeholder='Search tasks...' value={searchItem} onChange={(e)=> setSearchItem(e.target.value)} />
    </div>
  )
}

export default TaskSearch
