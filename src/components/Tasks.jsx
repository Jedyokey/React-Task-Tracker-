import React from 'react'
import { tasks as defaultTasks } from '../tasks'
import Task from './Task';

const Tasks = ({tasks}) => {
    const taskList = tasks.length ? tasks : defaultTasks; // Use tasks from props or fallback to defaultTasks  

  return (
    <div>
      {taskList.map((task) => (
         <Task key={task.id} task={task} />
      ))}
    </div> 
  )
}

export default Tasks
