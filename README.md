# React + Vite

### Simple Task Tracker

A React-based Task Tracker with a mock backend powered by JSON Server. This application allows users to manage their daily tasks efficiently with features such as adding, editing, deleting, and setting reminders for tasks. The app integrates with a mock backend using a JSON server to persist data.


### Getting Started

## Prerequisites
    - Node.js installed on your system.
    - JSON Server installed via npm install json-server.

## Installation
1. Clone this repository.
      - git clone https://github.com/Jedyokey/React-Task-Tracker-.git
        cd React-Task-Tracker
2.  Install dependencies
      -  npm install
3.  Start the development server
      -  npm run dev
4.  Start the JSON server
      -  npm run server


## Features

1. Add Tasks

    - Users can add new tasks by entering task details like name, date, time,   and setting reminders.
    - Tasks are stored on the backend (JSON server) and persist even after refreshing the browser.

2. Edit Tasks
        - Edit task details (name, date, time, and reminder status) by clicking the "edit" icon.
        - Changes are updated on the backend and reflected in the application.

3.  Delete Tasks
        - Delete tasks by clicking the delete icon.
        - The deletion updates the backend and removes the task from the list, even after refreshing.

4.  Set Reminders
        - Tasks with reminders are visually highlighted, indicating the reminder is active.
        - Double-click any task to toggle a reminder. Tasks with reminders are highlighted with a 5px green border.


## JSON Server Setup
1.  Port: 5000
2.  Endpoints:
    i)  Base URL: http://localhost:5000/
    ii) Tasks: http://localhost:5000/tasks
3.  Database File: db.json (located in the root directory)
        {
            "tasks": [
                {
                "id": "1",
                "text": "Doctors Appointment",
                "day": "Feb 5th at 2:30pm",
                "reminder": true
                },
                ...
            ]
        }


## Core Code Snippets

# Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        return data;
    };

# Add Task
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(task),
        });

        const data = await res.json();
        setTasks([...tasks, data]);
    };

# Delete Task
    The deleteTask function removes a task both from the UI and the backend:
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });
        setTasks(tasks.filter((task) => task.id !== id));
    };

# Edit Task
    The editTask function enables users to update a task:
    const editTask = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        setEditingTask(taskToEdit);
        setIsEditing(true);
    };

## Dependencies
-   React Router DOM: For navigation between components.
-   JSON Server: Mock backend database for task management.
-   Check the package.json file for all dependencies.


### Application Screenshots

### Home Page
![Task Tracker Home Page](./Home.png)

### Add Task Page
![Task Tracker Add Task](./Add-Task.png)


## Future Enhancements
-   Implement authentication for secure access to tasks.
-   Add filtering and search functionality.
-   Integrate a real backend API.
-   Implement additional UI/UX features.
