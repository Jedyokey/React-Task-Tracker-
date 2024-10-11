import React, {useState} from 'react'
import Header from './components/Header'; 
import Tasks from './components/Tasks';
import { tasks as defaultTasks } from './tasks';
import AddTask from './components/AddTask';

const App = () => {
  // Use default tasks as the initial state
  const [tasks, setTasks] = useState(defaultTasks); 
  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map(
        (task) => 
          task.id === id ? {...task, reminder: !task.reminder} : task 
      )
    )
  }

  // Add Task
  // const addTask = (task) => {
  //   if (!task.text) return;
  //   const newTask = { id: Math.floor(Math.random()*10000), text: task.text };
  //   setTasks([...tasks, newTask]);
  // }
  
  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      /> 
      {showAddTask && <AddTask onAdd={addTask} /> }
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder} 
      />
    </div>
  )
}

export default App
