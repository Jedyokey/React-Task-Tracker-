import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Tasks from './components/Tasks';
// import { tasks as defaultTasks } from './tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  // Use default tasks as the initial state  
  const [tasks, setTasks] = useState([]);  
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => { 
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    // console.log(data);
    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    // console.log(data);
    return data;
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks, data])

    // // console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    // console.log(id);
    setTasks(
      tasks.map(
        (task) => 
          task.id === id ? {...task, reminder: data.reminder} : task 
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
    <Router> 
        <div className='container'>
          <Header 
            onAdd={() => setShowAddTask(!showAddTask)} 
            showAdd={showAddTask} 
          /> 
          <Routes> 
            <Route path='/' element={
              <>
                {showAddTask && <AddTask onAdd={addTask} /> }
                <Tasks 
                  tasks={tasks} 
                  onDelete={deleteTask}
                  onToggle={toggleReminder} 
                />
              </> 
            } />
            <Route path="/about" element={<About />} /> 
          </Routes>
          <Footer />
        </div>
    </Router>
  )
}

export default App
