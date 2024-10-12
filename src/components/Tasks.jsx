import React from 'react'
import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
    // const taskList = tasks.length ? tasks : defaultTasks; // Use tasks from props or fallback to defaultTasks  

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => ( 
            <Task 
               key={task.id} 
               task={task} 
               onDelete={onDelete}
               onToggle={onToggle} 
           />
         ))
      ) : (
        <h3>No Tasks Available</h3>
      )}
    </div> 
  )
}

export default Tasks
