import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onEdit, onDelete, onToggle}) => {
  return (
    <div 
        className={`task ${task.reminder ? "reminder" : ""}`} 
        onDoubleClick={() => onToggle(task.id)}
    > 

      <div className="task-title">
        <h3>
          {task.text} 
        </h3>
        <div className="task-icon">
          <FaEdit
                className='myIcon' 
                style={{color: "blue", cursor: "pointer"}}  
                onClick={() => onEdit(task.id)} 
                size={22} 
          /> 
          <FaTimes 
                style={{color: "red", cursor: "pointer"}} 
                onClick={() => onDelete(task.id)}  
                size={22}
          />
        </div>
      </div>

      <p>{task.day}</p> 
    </div>
  )
}

export default Task
